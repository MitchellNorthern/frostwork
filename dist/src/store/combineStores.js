"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineStores = void 0;
function combineStores(keysAndStores) {
    const combinedStore = {};
    keysAndStores.forEach(item => {
        combinedStore[item[0]] = item[1];
    });
    return combinedStore;
}
exports.combineStores = combineStores;
//# sourceMappingURL=combineStores.js.map