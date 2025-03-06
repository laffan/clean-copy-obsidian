import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface CleanCopySettings {
	removeComments: boolean;
	removeCallouts: boolean;
	removeHighlights: boolean;
}

const DEFAULT_SETTINGS: CleanCopySettings = {
	removeComments: true,
	removeCallouts: true,
	removeHighlights: true
}

export default class CleanCopyPlugin extends Plugin {
	settings: CleanCopySettings;

	async onload() {
		await this.loadSettings();

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('clipboard-copy', 'Clean Copy', (evt: MouseEvent) => {
			this.cleanCopyCurrentDocument();
		});
		
		ribbonIconEl.addClass('clean-copy-ribbon-class');

		// Add status bar item
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Clean Copy Ready');

		// Add command to copy without comments/callouts
		this.addCommand({
			id: 'clean-copy-document',
			name: 'Copy document ',
			callback: () => {
				this.cleanCopyCurrentDocument();
			}
		});

		// Add a command to copy selection with clean formatting
		this.addCommand({
			id: 'clean-copy-selection',
			name: 'Copy selection',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const selection = editor.getSelection();
				if (selection) {
					const cleanText = this.cleanText(selection);
					navigator.clipboard.writeText(cleanText).then(() => {
						new Notice('Selection copied without comments/callouts!');
					}).catch(err => {
						new Notice('Failed to copy text: ' + err);
					});
				} else {
					new Notice('No text selected');
				}
			}
		});

		// Add settings tab
		this.addSettingTab(new CleanCopySettingTab(this.app, this));
	}

	cleanCopyCurrentDocument() {
		const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
		
		if (activeView) {
			const editor = activeView.editor;
			const documentText = editor.getValue();
			const cleanText = this.cleanText(documentText);
			
			navigator.clipboard.writeText(cleanText).then(() => {
				new Notice('Document copied without comments/callouts!');
			}).catch(err => {
				new Notice('Failed to copy text: ' + err);
			});
		} else {
			new Notice('No active Markdown document');
		}
	}

	cleanText(text: string): string {
		let result = text;
		
		// Remove comments (%%...%%) if the setting is enabled
		if (this.settings.removeComments) {
			result = result.replace(/%%[\s\S]*?%%/g, '');
		}
		
		// Remove callouts if the setting is enabled
		if (this.settings.removeCallouts) {
			// Match callout blocks that begin with "> [!" and continue for multiple lines
			// as long as ">" is the first character of each line
			result = result.replace(/^>\s*\[!.*\n(?:>\s*.*\n?)*$/gm, '');
		}
		
		// Remove highlights (==...==) if the setting is enabled
		if (this.settings.removeHighlights) {
			// This completely removes highlighted text including the content inside
			result = result.replace(/==[\s\S]*?==/g, '');
		}
		
		// Clean up any possible double line breaks created during removal
		result = result.replace(/\n{3,}/g, '\n\n');
		
		return result;
	}

	onunload() {
		// Clean up when plugin is disabled
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class CleanCopySettingTab extends PluginSettingTab {
	plugin: CleanCopyPlugin;

	constructor(app: App, plugin: CleanCopyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();
		containerEl.createEl('h2', {text: 'Clean Copy Settings'});

		new Setting(containerEl)
			.setName('Remove Comments')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.removeComments)
				.onChange(async (value) => {
					this.plugin.settings.removeComments = value;
					await this.plugin.saveSettings();
				}));
				
		new Setting(containerEl)
			.setName('Remove Callouts')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.removeCallouts)
				.onChange(async (value) => {
					this.plugin.settings.removeCallouts = value;
					await this.plugin.saveSettings();
				}));
				
		new Setting(containerEl)
			.setName('Remove Highlights')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.removeHighlights)
				.onChange(async (value) => {
					this.plugin.settings.removeHighlights = value;
					await this.plugin.saveSettings();
				}));
	}
}