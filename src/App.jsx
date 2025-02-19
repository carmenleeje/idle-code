import React, { useState, useEffect } from 'react';
import './App.css';
import Console from './components/Console';

function App() {
    const [codeLines, setCodeLines] = useState([]);
    const [lineCount, setLineCount] = useState(0);

    const handleClick = () => {
        setLineCount(prev => prev + 1);
        const newLine = {
            lineNumber: lineCount + 1,
            code: `console.log("Hello World ${lineCount + 1}");`
        };
        
        setCodeLines(prevLines => {
            const newLines = [...prevLines, newLine];
            return newLines.slice(-15); // Keep only last 15 lines
        });
    };

    return (
        <div className="ide-container">
            <div className="stats-bar">
                <div>Lines of Code: {lineCount}</div>
            </div>
            <Console lines={codeLines} />
            <button className="generate-button" onClick={handleClick}>
                Generate Code
            </button>
        </div>
    );
}

export default App;
