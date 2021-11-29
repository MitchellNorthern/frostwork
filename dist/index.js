"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frostwork = void 0;
const stores_map_1 = require("./store-handling/stores-map");
const create_store_1 = require("./stores/create-store");
exports.Frostwork = {
    getStore: stores_map_1.getStore,
    createStore: create_store_1.createStore,
    createTempStore: create_store_1.createTempStore
};
//# sourceMappingURL=index.js.map