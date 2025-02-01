# Startr.Style Autocomplete for VS Code

> **Get started with Startr’s amazing component utilities directly from VS Code!**  
>
> Add `<link rel="stylesheet" href="https://startr.style/style.css">` to your HTML, and start coding with Startr.Style and start styling with ease.
>
> This extension provides fast autocompletion suggestions for [Startr.Style](https://startr.style) – a utility complete CSS framework that’s under 50 KB (8 KB zipped). Streamline your workflow by quickly accessing Startr’s custom properties and helpers within your `.html`, `.css`, or related files ASAP!!!
>




## Features

- **Smart IntelliSense**  
  Enjoy context-aware suggestions for Startr custom properties (like `--bg`, `--p`, `--br`, `--shadow`, etc.) directly in your style attributes or CSS files.
  
- **Utility Complete CSS**  
  Quickly discover and apply Startr's utility-first approach, which leverages custom properties so you can define values without leaving your HTML.

- **Lightweight & Efficient**  
  Startr.Style weighs only ~8 KB when compressed, ensuring your projects remain fast and responsive.

- **Built-In Reference Docs**  
  Hover tooltips and suggestions include short documentation to help you remember property usage, making it easier than ever to code with Startr.Style.

Here's a quick demo of how Startr.Style utilities might look in VS Code:

![Startr.Style Autocomplete for VS Code Demo](./media/Startr.Style.Sugest.gif)

With this extension you have quick access to Startr.Style in VS Code, providing autocomplete suggestions for `--shadow`, `--p`, `--br`, and more while you type.

## Why Build with Startr.Style

Startr.Style accelerates and standardizes web design through custom property helpers and utilities, all seamlessly integrated within the style attribute. This innovative approach:

- Makes styling faster and more consistent across projects.  
- Enables a lean and efficient workflow with no extra build steps.  
- Provides out-of-the-box styles for core HTML elements (no extra classes needed).  
- Offers the convenience and power of a utility-first framework without the bloat.

**Key Advantages**:

1. **Complete Set of Tools** for styling with CSS.  
2. **Instantly Ready-to-Use** – no compilation required.  
3. **Small File Size** (~8 KB compressed).  
4. **Easy to Use** – add a single stylesheet link, and you’re good to go.
5. **No Classes Needed** – style elements directly with custom properties.

## Installation & Usage

1. **Install the Extension**  
   - Open the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
   - Search for **“Startr.Style Autocomplete for VS Code”**.
   - Click **Install**.

2. **Include Startr.Style in Your Project**  

   Add the following line in the `<head>` of your HTML to bring Startr’s default styles into your project:

   ```html
   <link rel="stylesheet" href="https://startr.style/style.css">
   ```
   You're always free to download the CSS file and host it locally in your project.

3. **Start Coding**  
   - Begin writing your HTML and CSS.
   - When typing style attributes or CSS properties like `--bg`, `--p`, `--br`, etc., VS Code will automatically provide IntelliSense suggestions from this extension.

### Example

```html
<html>
  <head>
    <link rel="stylesheet" href="https://startr.style/style.css">
  </head>
  <body>
    <button style="--d:none; --d-md:block;">
      Not visible on phones, but visible on tablets and desktops!
    </button>
  </body>
</html>
```

Here, Startr.Style’s responsive utility `--d-md:block` is applied, making the otherwise hidden button visible on tablets and desktops. This showcases how Startr.Style applies responsive design directly in the style attribute.

## Requirements

- VS Code version 1.60.0 or higher is recommended.  
- A basic HTML/CSS project structure (the extension primarily focuses on `.html` and `.css` files, but may also assist in React/JSX if style attributes are used).

## Extension Settings

At this time, the extension provides IntelliSense out of the box without additional configuration. Future settings might include:

- `startrStyle.enable`: Enable/disable the extension.  
- `startrStyle.suggestionsPriority`: Adjust the priority of Startr.Style suggestions relative to other suggestions.
- `startrStyle.autoAddStyleLink`: Automatically add the Startr.Style stylesheet link to the HTML file.

## Known Issues

- Some custom properties may not appear in certain templating or framework-based files if VS Code does not recognize them as HTML/CSS.   (e.g., `.jsx`, `.tsx`, `.vue`, etc. we may resolve this in future updates).
- For best results, make sure the files are set to HTML/CSS syntax.  

If you experience any issues, please [open an issue on GitHub](https://github.com/Startr/VSCODE-Startr.Style/issues).

## Release Notes

### 0.1.0
- Initial release of Startr.Style Autocomplete for VS Code extension.
- Provides IntelliSense suggestions for Startr’s custom property utilities.
- Includes basic hover documentation and autocomplete.

### 1.x.x (Upcoming)
- Adding improved IntelliSense coverage for responsive variants 
  > (e.g., `--property-sm`, `--property-md`, etc.).
- Enhanced documentation for built-in Startr variables.
- Improved suggestion matching for inline styles in HTML and MarkDown.
- Minor bug fixes.

---

## More About Startr.Style

- **Responsive Design**  
  Seamlessly switch or apply utilities (`--d-sm`, `--d-md`, etc.) for different screen sizes.

- **Flexible & Customizable**  
  You define the values. Whether it’s a named CSS variable (`--bg:var(--dark)`), or a hex code (`--bg:#2A2A2A`), or simply color names (`--bg:blue`), [Startr.Style](https://startr.style/) accommodates any valid CSS input.

- **Experiment & Prototype**  
  Perfect for quickly mocking up UI ideas right inside HTML. No huge CSS buildup as your project grows.

- **Reusable Components**  
  Create reusable components on the fly, making it easy to maintain and update styles across your project.

- **Ready-to-Use Styles**  
  [Startr.Style](https://startr.style/) provides default styles for core HTML elements, so you can start styling right away without extra classes.

For a deeper dive, please visit [Startr.Style](https://startr.style/) or explore our [ Startr.Style GitHub repository](https://github.com/Startr/Style) for additional docs and resources.

---

**Enjoy building with [Startr.Style](https://startr.style/) and make styling a breeze!**  


## Manual Install

1. Download the latest release of [our VSIX from the github repo](./startr-style-autocompletion-0.1.0.vsix) or clone the repo and build the extension yourself.
2. Open VS Code and click on the Extensions icon in the Activity Bar on the side of the window.
3. Click on the More Actions icon (3 horizontal dots) in the Extensions view and select Install from VSIX....
4. Select the `.vsix` file you downloaded in step 1.
5. Click Install to start the installation.
![Install](./media/Install_Startr.Style_Suggest_vsix.gif)


## Local Development

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Open the project in VS Code.
4. Press `F5` to open a new window with the extension loaded.
5. Make changes to the code.
6. Press `F5` to reload the window with the changes.
7. Build the extension with `npx @vscode/vsce package`
8. Install the `.vsix` file in your VS Code instance.
10. Push your changes and create a PR.
11. Celebrate  🎉
12. Join our AMAZING Team of contributors.
