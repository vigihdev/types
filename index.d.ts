// Type definitions for vigihdev
// Project: https://github.com/vigihdev/types
// Definitions by: Vigihdev Developer <your-email@example.com>

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Config {
    apiUrl: string;
    timeout: number;
}

export declare function initialize(config: Config): void;
export declare function getUser(id: number): User;