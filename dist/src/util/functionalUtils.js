"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = void 0;
function curry(f, ...args) {
    return args.length >= f.length
        ? f(...args)
        : (...next) => curry(f, ...args, ...next);
}
exports.curry = curry;
//# sourceMappingURL=functionalUtils.js.map