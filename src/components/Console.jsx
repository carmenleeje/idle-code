import React, { useRef, useEffect } from 'react';
import '../styles/console.css';

const Console = ({ lines }) => {
    const consoleRef = useRef(null);

    useEffect(() => {
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="console" ref={consoleRef}>
            {lines.map((line, index) => (
                <div key={index} className="console-line">
                    <span className="line-number">{line.lineNumber}</span>
                    <span className="code-content">{line.code}</span>
                </div>
            ))}
        </div>
    );
};

export default Console;
