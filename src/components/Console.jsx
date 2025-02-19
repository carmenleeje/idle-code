import React, { useRef, useEffect, useState } from 'react';
import '../styles/console.css';

const Console = ({ lines }) => {
    const consoleRef = useRef(null);
    const [displayedLines, setDisplayedLines] = useState([]);
    const animationQueueRef = useRef([]);
    const isAnimatingRef = useRef(false);

    useEffect(() => {
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [displayedLines]);

    const processNextAnimation = () => {
        if (animationQueueRef.current.length === 0) {
            isAnimatingRef.current = false;
            return;
        }

        isAnimatingRef.current = true;
        const line = animationQueueRef.current[0];
        let currentText = '';
        const fullText = line.code;
        
        // Increase characters per tick for faster typing
        const charsPerTick = 5; // Increase this number for even faster typing
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex < fullText.length) {
                // Add multiple characters per tick
                const nextIndex = Math.min(charIndex + charsPerTick, fullText.length);
                currentText += fullText.substring(charIndex, nextIndex);
                charIndex = nextIndex;
                
                setDisplayedLines(prevLines => {
                    const newLines = [...prevLines];
                    const lastIndex = newLines.length - 1;
                    newLines[lastIndex] = {
                        ...line,
                        code: currentText
                    };
                    return newLines;
                });
            } else {
                clearInterval(typingInterval);
                animationQueueRef.current.shift();
                processNextAnimation();
            }
        }, 10); // Reduced interval time (was 20)
    };

    useEffect(() => {
        if (lines.length === 0) return;
        
        const lastLine = lines[lines.length - 1];
        
        setDisplayedLines(prevLines => {
            const newLines = [...prevLines];
            if (newLines.length >= 15) {
                newLines.shift();
            }
            newLines.push({
                ...lastLine,
                code: ''
            });
            return newLines;
        });

        animationQueueRef.current.push(lastLine);

        if (!isAnimatingRef.current) {
            processNextAnimation();
        }
    }, [lines]);

    return (
        <div className="console" ref={consoleRef}>
            {displayedLines.map((line, index) => (
                <div key={`${line.lineNumber}-${index}`} className="console-line">
                    <span className="line-number">{line.lineNumber}</span>
                    <span className="code-content">{line.code}</span>
                </div>
            ))}
        </div>
    );
};

export default Console;
