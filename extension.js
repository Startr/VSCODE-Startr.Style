// extension.js
const vscode = require('vscode');

/**
 * Basic data structure for a property shorthand.
 */
const PROPERTY_SHORTHANDS = [
    {
        property: 'border-radius',
        shorthand: '--br',
        mediaQueries: true,
        placeholder: '0.6em',
        description: 'Sets the radius of the element\'s corners.'
    },
    {
        property: 'shadow',
        shorthand: '--shadow',
        mediaQueries: true,
        placeholder: '6',
        description: 'The --shadow helper is the default shadow helper and adds a smooth box shadow to an element. Value of this helper collectively sets the offset, blur and intensity of the shadow.'
    },
    {
        property: 'levitate on hover',
        shorthand: '--levitate-hvr',
        mediaQueries: true,
        placeholder: '6',
        description: 'The --levitate-hvr helper is a hover helper and adds a smooth box shadow to an element on hover. Value of this helper collectively sets the offset, blur and intensity of the shadow.'
    },
    {
        property: 'align-content',
        shorthand: '--ac',
        mediaQueries: true,
        placeholder: 'center',
        description: 'Defines how flexbox container lines are distributed along the cross-axis.'
    },
    {
        property: 'background-color',
        shorthand: '--bgc',
        mediaQueries: true,
        placeholder: '#ffffff',
        description: 'Sets the background color of an element.'
    },
    {
        property: 'border',
        shorthand: '--b',
        mediaQueries: true,
        placeholder: '1px solid #000',
        description: 'Sets the border on all sides of an element in a single declaration.'
    },
    {
        property: 'width',
        shorthand: '--w',
        mediaQueries: true,
        placeholder: '80%',
        description: 'Sets the width of an element.'
    },
    {
        property: 'height',
        shorthand: '--h',
        mediaQueries: true,
        placeholder: '100%',
        description: 'Sets the height of an element.'
    },
    {
        property: 'margin',
        shorthand: '--m',
        mediaQueries: true,
        placeholder: 'auto',
        description: 'Sets the margin on all sides of an element.'
    },
    {
        property: 'padding',
        shorthand: '--p',
        mediaQueries: true,
        placeholder: '1em',
        description: 'Sets the padding on all four sides of an element.'
    },
    {
        property: 'display',
        shorthand: '--d',
        mediaQueries: true,
        placeholder: 'block',
        description: 'Specifies the display behavior of an element.'
    },
    {
        property: 'flex',
        shorthand: '--f',
        mediaQueries: true,
        placeholder: '1 1 auto',
        description: 'A shorthand for flex-grow, flex-shrink, and flex-basis.'
    },
    {
        property: 'flex-direction',
        shorthand: '--fd',
        mediaQueries: true,
        placeholder: 'row',
        description: 'Defines the direction of the main axis (horizontal or vertical).'
    },
    {
        property: 'flex-grow',
        shorthand: '--fg',
        mediaQueries: true,
        placeholder: '1',
        description: 'Defines how much a flex item will grow relative to the rest of the flex items.'
    },
    {
        property: 'flex-shrink',
        shorthand: '--fs',
        mediaQueries: true,
        placeholder: '1',
        description: 'Defines how much a flex item will shrink relative to the rest of the flex items.'
    },
    {
        property: 'flex-wrap',
        shorthand: '--fw',
        mediaQueries: true,
        placeholder: 'wrap',
        description: 'Whether flex items are forced on one line or can wrap onto multiple lines.'
    },
    {
        property: 'font-size',
        shorthand: '--fsz',
        mediaQueries: true,
        placeholder: '16px',
        description: 'Specifies the size of the font.'
    },
    {
        property: 'font-weight',
        shorthand: '--fwt',
        mediaQueries: true,
        placeholder: '400',
        description: 'Specifies the weight (or boldness) of the font.'
    },
    {
        property: 'justify-content',
        shorthand: '--jc',
        mediaQueries: true,
        placeholder: 'center',
        description: 'Defines how flex items are laid out along the main axis.'
    },
    {
        property: 'text-align',
        shorthand: '--ta',
        mediaQueries: true,
        placeholder: 'left',
        description: 'Specifies how inline content (like text) is aligned in its parent block.'
    },
    {
        property: 'text-decoration',
        shorthand: '--td',
        mediaQueries: true,
        placeholder: 'underline',
        description: 'Sets the appearance of decorative lines on text.'
    },
    {
        property: 'text-transform',
        shorthand: '--tt',
        mediaQueries: true,
        placeholder: 'uppercase',
        description: 'Controls the capitalization of text.'
    },
    {
        property: 'transform',
        shorthand: '--t',
        mediaQueries: true,
        placeholder: 'rotate(45deg)',
        description: 'Applies a 2D or 3D transformation to an element.'
    },
    {
        property: 'transition',
        shorthand: '--tr',
        mediaQueries: true,
        placeholder: 'all 0.3s ease',
        description: 'A shorthand for defining transition-property, duration, timing-function, and delay.'
    },
    {
        property: 'z-index',
        shorthand: '--z',
        mediaQueries: true,
        placeholder: '999',
        description: 'Controls the stacking order of elements that overlap.'
    },
    // ... Add more from your table with placeholder & description ...
];


/**
 * Naive check to see if cursor is inside style=" ... ".
 * Only checks the current line for style=" and no second quote.
 */
function isInsideStyleAttribute(document, position) {
    const lineText = document.lineAt(position).text;
    const styleIndex = lineText.indexOf('style="');
    if (styleIndex === -1) {
        return false;
    }
    // Position right after style=" is:
    const afterStyleQuote = styleIndex + 'style="'.length;
    // If the cursor is beyond that point, assume we are inside the style.
    return position.character > afterStyleQuote;
}

/**
 * Completion provider class.
 */
class HtmlStyleShorthandCompletionProvider {
    provideCompletionItems(document, position, token, context) {
        // 1) Check if we're in style="..."
        if (!isInsideStyleAttribute(document, position)) {
            return undefined; // no completions
        }

        // 2) Build completion items
        const items = PROPERTY_SHORTHANDS.map(item => {
            // We'll display the shorthand as the label, but insert the actual property
            // with some snippet placeholders (property: value;).
            const completion = new vscode.CompletionItem(
                item.shorthand,
                vscode.CompletionItemKind.Snippet
            );

            // Insert text: property: ...
            // We use a snippet so the user’s cursor can easily type the value.
            // Isert the snippet with the shorthand for the value along withe the placeholder.
            completion.insertText = new vscode.SnippetString(`${item.shorthand}: ${item.placeholder}$1`);

            // Provide more info in detail/documentation
            completion.detail = `Startr.Style `;
            completion.documentation = new vscode.MarkdownString(
                ` Shorthand: **${item.shorthand}** for **${item.property}**\n\n\n ${item.description}\n\n\n\n Media Queries: **${item.mediaQueries ? 'Yes' : 'No'}**\n\n > Small '-sm': media (min-width: 640px) \n > Medium '-md': media (min-width: 768px) \n > Large '-lg': media (min-width: 1024px) \n > ExtrLarge '-xl': media (min-width: 1280px)`
            );

            return completion;
        });

        return items;
    }
}

/**
 * Called when extension is activated.
 */
function activate(context) {
    // Register a completion provider for HTML language
    // Trigger on ':', ';', '-', ' '.
    const provider = vscode.languages.registerCompletionItemProvider(
        { language: 'html', scheme: 'file' },
        new HtmlStyleShorthandCompletionProvider(),
        ':', ';', '-', ' ' // trigger characters
    );

    context.subscriptions.push(provider);
}

/**
 * Called when extension is deactivated.
 */
function deactivate() {
    // Cleanup if needed
}

module.exports = {
    activate,
    deactivate
};
