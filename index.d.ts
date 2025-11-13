// Type definitions for vigihdev
// Project: https://github.com/vigihdev/types
// Definitions by: Vigihdev Developer <your-email@example.com>

import Handlebars from "./handlebars";

declare global {
    var moment: typeof import('./moment');
    var Handlebars: Handlebars;
}

export { }