"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeLenses = exports.createLens = void 0;
function createLens(get, set) {
    return {
        get,
        set
    };
}
exports.createLens = createLens;
function composeLenses(lens1, lens2) {
    return {
        get: (parent) => lens2.get(lens1.get(parent)),
        set: (parent) => (endChild) => lens1.set(parent)(lens2.set(lens1.get(parent))(endChild))
    };
}
exports.composeLenses = composeLenses;
//# sourceMappingURL=lensUtils.js.map