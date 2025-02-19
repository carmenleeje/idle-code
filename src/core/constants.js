export const GAME_VERSION = '0.1.0';

export const LANGUAGES = {
    HTML: 'HTML',
    CSS: 'CSS',
    JAVASCRIPT: 'JavaScript',
    SQL: 'SQL',
    PYTHON: 'Python'
};

export const PHASES = {
    ALPHA: 1,
    BETA: 2,
    DEBUG: 3,
    RELEASE: 4
};

export const INITIAL_GAME_STATE = {
    // Core metrics
    linesOfCode: 0,
    totalLinesOfCode: 0,
    clickPower: 1,
    locPerSecond: 0,

    // Progress
    currentPhase: PHASES.ALPHA,
    currentLanguage: LANGUAGES.HTML,
    currentVersion: '0.1.0',
    
    // Player stats
    level: 1,
    experience: 0,
    
    // Unlocks
    typingEnabled: false,
    
    // Prestige
    prestigeCount: 0,
    languagePrestigeCount: {
        [LANGUAGES.HTML]: 0,
        [LANGUAGES.CSS]: 0,
        [LANGUAGES.JAVASCRIPT]: 0,
        [LANGUAGES.SQL]: 0,
        [LANGUAGES.PYTHON]: 0
    }
};
