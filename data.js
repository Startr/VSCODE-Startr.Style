module.exports = {
    cssVariables: [
        { shorthand: '--ac', property: 'align-content', mediaQuery: true },
        { shorthand: '--ai', property: 'align-items', mediaQuery: true },
        { shorthand: '--as', property: 'align-self', mediaQuery: true },
        { shorthand: '--p', property: 'padding', mediaQuery: true },
        { shorthand: '--m', property: 'margin', mediaQuery: true },
        { shorthand: '--d', property: 'display', mediaQuery: true },
        { shorthand: '--br', property: 'border-radius', mediaQuery: true },
        { shorthand: '--bc', property: 'border-color', mediaQuery: true },
        { shorthand: '--z', property: 'z-index', mediaQuery: true }
    ],
    mediaSuffixes: [
        { suffix: '-sm', description: 'Small (≥640px)' },
        { suffix: '-md', description: 'Medium (≥768px)' },
        { suffix: '-lg', description: 'Large (≥1024px)' },
        { suffix: '-xl', description: 'Extra Large (≥1280px)' }
    ]
};