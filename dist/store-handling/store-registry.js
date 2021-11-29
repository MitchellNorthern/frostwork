"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRegistryKey = exports.addRegistryKey = exports.registry = void 0;
exports.registry = [];
const addRegistryKey = (newKey) => {
    let duplicateIndex;
    exports.registry.forEach((key, index) => {
        if (key.name === newKey.name) {
            duplicateIndex = index;
        }
    });
    if (duplicateIndex) {
        exports.registry.splice(duplicateIndex, 1, newKey);
    }
    else {
        exports.registry.push(newKey);
    }
};
exports.addRegistryKey = addRegistryKey;
const removeRegistryKey = (name) => {
    let removeIndex;
    exports.registry.forEach((key, index) => {
        if (key.name === name) {
            removeIndex = index;
        }
    });
    if (removeIndex) {
        exports.registry.splice(removeIndex, 1);
        return true;
    }
    return false;
};
exports.removeRegistryKey = removeRegistryKey;
//# sourceMappingURL=store-registry.js.map