import { Lens, Getter, Setter } from '../types/lensTypes'

/**
 * Creates a Lens
 * Written with great help from the below article:
 * @param { Getter<A,B> } get - The getter function for the lens
 * @param { Setter<A,B> } set - The setter function for the lens
 * @link https://dzone.com/articles/functional-javascript-lenses
 */
export function createLens<A, B>(
    get: Getter<A, B>,
    set: Setter<A, B>
): Lens<A, B> {
    return {
        get,
        set
    }
}

/**
 * Composes two lenses together to form one lens from objects A to C
 * Written with great help from the below article:
 * @param lens1 - The first lens to compose, from object A to B
 * @param lens2 - The second lens to compose, from object B to C
 * @link https://dzone.com/articles/functional-javascript-lenses
 */
export function composeLenses<A, B, C>(
    lens1: Lens<A, B>,
    lens2: Lens<B, C>
): Lens<A, C> {
    return {
        get: (parent: A) => lens2.get(lens1.get(parent)),
        set: (parent: A) => (endChild: C) =>
            lens1.set(parent)(lens2.set(lens1.get(parent))(endChild))
    }
}
