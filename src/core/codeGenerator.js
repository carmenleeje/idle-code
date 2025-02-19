import { LANGUAGES } from './constants';

const HTML_TEMPLATES = {
    basic: [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '    <meta charset="UTF-8">',
        '    <title>My Website</title>',
        '</head>',
        '<body>',
        '    <header>',
        '    </header>',
        '    <main>',
        '    </main>',
        '    <footer>',
        '    </footer>',
        '</body>',
        '</html>'
    ],
    elements: [
        '<div class="container">',
        '<h1>Welcome to my site</h1>',
        '<p>This is a paragraph.</p>',
        '<button class="btn">Click me</button>',
        '<img src="image.jpg" alt="An image">',
        '<ul>',
        '    <li>List item 1</li>',
        '    <li>List item 2</li>',
        '</ul>'
    ]
};

class CodeGenerator {
    constructor() {
        this.currentLine = 0;
        this.template = HTML_TEMPLATES.basic;
        this.generatedLines = new Set();
        this.lineCounter = 0;
    }

    generateLine(language) {
        let line = '';
        this.lineCounter++;
        
        switch(language) {
            case LANGUAGES.HTML:
                if (this.currentLine >= this.template.length) {
                    this.currentLine = 0;
                    this.template = HTML_TEMPLATES.elements;
                }
                line = this.template[this.currentLine];
                this.currentLine++;
                break;
            // Add other languages later
            default:
                line = '// Unknown language';
        }

        return {
            code: line,
            lineNumber: this.lineCounter,
            isComplete: false
        };
    }
}

export const codeGenerator = new CodeGenerator();
