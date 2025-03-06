# Clean Copy for Obsidian

A simple Obsidian plugin that allows you to copy text from your documents without comments, callouts, or highlights.

## Usage

1. Click the clipboard icon in the left ribbon, or
2. Use the command palette (Ctrl/Cmd+P) and search for:
   - `Clean Copy: Copy document`
   - `Clean Copy: Copy selection`
3. The cleaned text will be copied to your clipboard, ready to paste anywhere

## Settings

Access plugin settings via Settings > Community Plugins > Clean Copy:

- **Remove Comments**: Toggle to remove text between `%%` markers
- **Remove Callouts**: Toggle to remove callout blocks
- **Remove Highlights**: Toggle to remove text between `==` markers

All options are enabled by default.

## Installation

### From Obsidian Community Plugins

1. Open Obsidian Settings > Community Plugins
2. Disable Safe Mode
3. Click Browse and search for "Clean Copy"
4. Install the plugin and enable it

### Manual Installation

1. Create a folder named `obsidian-clean-copy` in your vault's `.obsidian/plugins/` directory
2. Download the latest release from the GitHub repository
3. Extract `main.js` and `manifest.json` to the folder you created
4. Reload Obsidian and enable the plugin in Settings > Community Plugins
