/**
 * Modified implementation of currying from the linked site.
 * @link https://sunjay.dev/2016/08/13/es6-currying
 * @param f - the function to curry
 * @param args - the args to pass to the curried function
 */
export function curry(f: Function, ...args: any) {
    return args.length >= f.length
        ? f(...args)
        : (...next: any) => curry(f, ...args, ...next)
}
