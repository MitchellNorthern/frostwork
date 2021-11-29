"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStore = exports.addStore = exports.storesMap = void 0;
exports.storesMap = new WeakMap();
const addStore = (key, store) => {
    exports.storesMap.set(key, store);
};
exports.addStore = addStore;
const getStore = (key) => {
    return exports.storesMap.get(key);
};
exports.getStore = getStore;
//# sourceMappingURL=stores-map.js.map