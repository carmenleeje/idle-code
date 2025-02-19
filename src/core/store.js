import { INITIAL_GAME_STATE } from './constants';

class GameStore {
    constructor() {
        this.state = this.loadGame() || {...INITIAL_GAME_STATE};
        this.subscribers = [];
    }

    // Load game from localStorage
    loadGame() {
        const savedGame = localStorage.getItem('idleCodeSave');
        return savedGame ? JSON.parse(savedGame) : null;
    }

    // Save game to localStorage
    saveGame() {
        localStorage.setItem('idleCodeSave', JSON.stringify(this.state));
    }

    // Subscribe to state changes
    subscribe(callback) {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(cb => cb !== callback);
        };
    }

    // Update state and notify subscribers
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.subscribers.forEach(callback => callback(this.state));
        this.saveGame();
    }

    // Get current state
    getState() {
        return this.state;
    }
}

export const gameStore = new GameStore();
