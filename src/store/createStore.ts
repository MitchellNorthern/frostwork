import { Store, OpticStore } from '../types/storeTypes'
import { createLens } from '../util/lensUtils'
/**
 * Creates a new store with 1 level of depth out of an object.
 *
 * Objects with more than one 1 level of depth should not be used,
 * as Frostwork will not properly create lenses for nested objects.
 * Instead, if you want to nest objects, multiple stores should be composed.
 * @see //TODO Link to composition goes here
 *
 * @param obj The object to make a store for.
 * These objects should only contain 1 level of depth.
 * In other words, this object should not contain other objects.
 */
export function createStore(obj: Store): OpticStore {
    const opticStore: { [key: string]: any } = {}
    Object.keys(obj).forEach((key: string) => {
        const item = obj[key]
        opticStore[key] = createLens<Store, typeof item>(
            obj => obj[key],
            obj => item => ({ ...obj, item })
        )
    })
    return opticStore
}
