"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
const lensUtils_1 = require("../util/lensUtils");
function createStore(obj) {
    const opticStore = {};
    Object.keys(obj).forEach((key) => {
        const item = obj[key];
        opticStore[key] = lensUtils_1.createLens(obj => obj[key], obj => item => (Object.assign(Object.assign({}, obj), { item })));
    });
    return opticStore;
}
exports.createStore = createStore;
//# sourceMappingURL=createStore.js.map