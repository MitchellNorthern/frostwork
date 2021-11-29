"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTempStore = exports.createStore = void 0;
const store_registry_1 = require("../store-handling/store-registry");
const stores_map_1 = require("../store-handling/stores-map");
function createStore(name, state, preSetListener, postSetListener, getListener) {
    const proxiedState = createProxy(state, preSetListener, postSetListener, getListener);
    const registryKey = { name };
    store_registry_1.addRegistryKey(registryKey);
    stores_map_1.addStore(registryKey, proxiedState);
}
exports.createStore = createStore;
function createTempStore(name, state, preSetListener, postSetListener, getListener) {
    const proxiedState = createProxy(state, preSetListener, postSetListener, getListener);
    const registryKey = { name };
    stores_map_1.addStore(registryKey, proxiedState);
    return registryKey;
}
exports.createTempStore = createTempStore;
function createProxy(state, preSetListener, postSetListener, getListener) {
    return new Proxy(state, {
        set(target, property, value, receiver) {
            const oldState = Object.assign({}, target);
            preSetListener && preSetListener(oldState);
            Reflect.set(target, property, value, receiver);
            postSetListener && postSetListener(oldState, target);
            return true;
        },
        get(target, property, receiver) {
            getListener && getListener(target);
            return Reflect.get(target, property, receiver);
        }
    });
}
//# sourceMappingURL=create-store.js.map