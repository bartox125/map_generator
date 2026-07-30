# Map Generator

A TypeScript-based web application for creating and editing tile maps with an intuitive drag-and-drop interface. Perfect for game development, level design, or any tilemap-based project.

## Features

- **Interactive Map Editing**: Create and edit maps using a grid-based interface
- **Item Selection**: Choose from a palette of sprite tiles to place on your map
- **Drag-Select Tool**: Easily select multiple map cells at once using click-and-drag
- **Multi-select Support**: Hold `Ctrl` (or `Cmd` on Mac) to select multiple non-contiguous cells
- **Undo/Redo**: Full support for `Ctrl+Z` (undo) and `Ctrl+Y` (redo) operations
- **Automatic Mode**: Toggle automatic selection of the next cell after placement
- **Save/Load**: Export your maps to HTML files and import them back
- **Context Menu**: Right-click menu for quick access to common operations

## Project Structure

```
src/
├── main.ts          # Application entry point and event listeners
├── generate.ts      # Map and item grid generation
├── marking.ts       # Selection and dragging logic
├── stack.ts         # Undo/Redo functionality
├── router.ts        # Keyboard shortcut routing
├── save_load.ts     # File save and load operations
├── utilis.ts        # Utility helper functions
├── style.css        # Styling (referenced but not included)
└── index.html       # HTML template
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- A modern web browser

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/map-generator.git
   cd map-generator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Usage

### Basic Workflow

1. **Select Items**: Click on any tile in the "Items" panel to select it
2. **Place on Map**: Click or drag on the map area to paint tiles
3. **Select Map Cells**: 
   - Click individual cells to select them
   - Drag to select multiple cells at once
   - Hold `Ctrl`/`Cmd` to add/remove from selection
4. **Apply Tiles**: With cells selected, click an item to apply it

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Z` | Undo last action |
| `Ctrl+Y` | Redo last action |
| `Ctrl+S` | Save map to file |
| `Ctrl+L` | Load map from file |
| `Delete` | Clear selected cells |
| `Ctrl/Cmd` | Hold to enable multi-select |

### Context Menu

Right-click on the map to access:
- Undo / Redo
- Delete
- Save to file
- Load from file

### Automatic Mode

Check the "automat" checkbox to automatically select the next map cell after placing a tile. This speeds up sequential tile placement.

## Map Specifications

- **Map Size**: 45 × 40 cells
- **Item Palette**: 16 × 40 sprites (split into two sections)
- **Sprite Size**: 25 × 25 pixels
- **File Format**: HTML (contains serialized map grid)

## How It Works

### Map Generation
- Maps are represented as a grid of `<div>` elements
- Each cell has a unique ID (`m_y_x`) for easy reference
- Background images are positioned using CSS `backgroundPosition`

### State Management
- All changes are stored in a history stack
- Undo/Redo operations navigate through the stack
- Each action saves a snapshot of the map HTML

### Selection System
- Selected cells are marked with the `checked` class
- Deselected cells get the `notChecked` class
- The `cover` div provides visual feedback during drag selection

## Technical Details

- **Language**: TypeScript
- **Build Tool**: Vite (assumed from common setup)
- **Browser APIs**: File API, Canvas-adjacent DOM manipulation
- **No External Dependencies**: Pure vanilla JavaScript/TypeScript

## File Formats

### Saved Maps
Maps are saved as `.html` files containing the serialized map grid. You can:
- Edit them in a text editor
- Open them in a browser directly
- Load them back into the application

## Troubleshooting

**Map not displaying**:
- Ensure the CSS stylesheet is loaded correctly
- Check browser console for JavaScript errors

**Items not showing**:
- Verify that the sprite sheet image is linked in your CSS
- Check the `backgroundPosition` values in `generate.ts`

**Undo/Redo not working**:
- Ensure `saveToStack()` is called after each map modification
- Check that the history stack hasn't exceeded memory limits

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source. Please add appropriate license information here.

## Author

Created as a map generation tool for tilemap-based projects.

---

**Happy mapping!** 🗺️
