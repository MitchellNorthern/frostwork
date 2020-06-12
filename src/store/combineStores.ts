import { CombinedStore, KeyAndStore } from '../types/storeTypes'

/**
 * Combines any number of stores together into one and returns the result.
 *
 * Combined stores are accessed via the returned store using the
 * string given in the tuple corresponding to each store.
 *
 * @param keysAndStores An array of tuples that contain a string
 *      designating the key for a store and the store itself (in that order).
 */
export function combineStores(keysAndStores: KeyAndStore[]): CombinedStore {
    const combinedStore: CombinedStore = {}
    keysAndStores.forEach(item => {
        combinedStore[item[0]] = item[1]
    })
    return combinedStore
}
