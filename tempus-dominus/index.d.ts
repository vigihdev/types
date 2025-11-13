

import { DateTime, DefaultOptions, extend, locale, Namespace, TempusDominus, Unit } from "./tempus-dominus";

declare global {

    var tempusDominus = {
        TempusDominus,
        Namespace,
        DefaultOptions,
        Unit,
        DateTime,
        Option,
        locale,
        extend
    }
}