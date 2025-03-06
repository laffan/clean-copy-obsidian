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

### License

MIT License

Copyright (c) 2025 Nate Laffan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.