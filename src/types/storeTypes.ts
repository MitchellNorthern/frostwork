import { Lens } from '../types/lensTypes'

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

/**
 * A group of stores that have been combined.
 * Can contain either keys to OpticStores or
 * another CombinedStore.
 */
export interface CombinedStore {
    [key: string]: OpticStore | CombinedStore
}

/**
 * A type to designate something that, well, isn't an object.
 */
export type NotObject =
    | number
    | string
    | Array<any>
    | boolean
    | bigint
    | null
    | undefined

/**
 * A type to designate a tuple containing
 * a key for a store and the store itself.
 */
export type KeyAndStore = [string, OpticStore | CombinedStore]
