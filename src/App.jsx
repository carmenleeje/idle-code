const handleClick = () => {
    const newLine = codeGenerator.generateLine(gameState.currentLanguage);
    
    setCodeLines(prevLines => {
        const newLines = [...prevLines, newLine];
        return newLines.slice(-15); // Keep only last 15 lines
    });

    gameStore.setState({
        linesOfCode: gameState.linesOfCode + gameState.clickPower,
        totalLinesOfCode: gameState.totalLinesOfCode + gameState.clickPower
    });
};

export default App