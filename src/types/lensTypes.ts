/**
 * Definition of a Lens, an abstraction of an object field
 * that defines getter and setter functions directly on a field,
 * no matter how deeply nested.
 */
export interface Lens<A, B> {
    get: Getter<A, B>
    set: Setter<A, B>
}

export type Getter<A, B> = (parent: A) => B
export type Setter<A, B> = (parent: A) => (child: B) => A
