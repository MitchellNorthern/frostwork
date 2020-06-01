import { Lens } from '../types/lensTypes'

export type NotObject =
    | number
    | string
    | Array<any>
    | boolean
    | null
    | undefined

/**
 * A Store, containing any number of items that are not objects.
 */
export interface Store {
    [key: string]: NotObject
}

/**
 * A Store that has been converted to contain only Lenses
 * with the same key values as the store.
 */
export interface OpticStore {
    [key: string]: Lens<object, NotObject>
}
