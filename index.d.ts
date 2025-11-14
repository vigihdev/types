// Type definitions for vigihdev
// Project: https://github.com/vigihdev/types
// Definitions by: Vigihdev Developer <your-email@example.com>

import Handlebars from "./handlebars";
import { TempusDominus } from "./tempus-dominus";
import { DateTime, DefaultOptions, extend, locale, Namespace, TempusDominus, Unit } from "./tempus-dominus";

declare global {
    var moment: typeof import('./moment');
    var Handlebars: Handlebars;
    var tempusDominus: {
        TempusDominus: TempusDominus
        DateTime: DateTime,
        DefaultOptions: DefaultOptions,
        extend: extend,
        locale: locale,
        Namespace: Namespace,
        Unit: Unit
    };

}

export { }