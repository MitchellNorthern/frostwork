import { addRegistryKey, registry } from '../store-handling/store-registry'
import { addStore } from '../store-handling/stores-map'
import { Key } from '../types/types'

/**
 * Creates a new Frostwork store.
 *
 * @param name name of the store. If this name is not unique globally to Frostwork, the existing store will be overridden.
 * @param state state object containing any data on the store
 * @param preSetListener (optional) function called before a piece of state is updated
 * @param postSetListener (optional) function called after a piece of state is updated
 * @param getListener (optional) function called any time a piece of state is retrieved
 */
export function createStore<T extends object>(
    name: String,
    state: T,
    preSetListener?: (state: T) => any,
    postSetListener?: (oldState: T, newState: T) => any,
    getListener?: (state: T) => any
): void {
    // Create a proxy to handle the store
    const proxiedState = createProxy(
        state,
        preSetListener,
        postSetListener,
        getListener
    )

    // Set up the store globally
    const registryKey: Key = { name }
    addRegistryKey(registryKey)
    addStore(registryKey, proxiedState)
}

/**
 * Creates a new temporary Frostwork store.
 *
 * This function differs from the createStore method in a two ways:
 *   1. It returns a key to obtain the store from the global registry
 *   2. It does not save the key to the global key registry
 *
 * If all references to the key returned by this method are lost, the temp store will be
 * garbage collected by JavaScript.
 *
 * @param name name of the store. If this name is not unique globally to Frostwork, the existing store will be overridden.
 * @param state state object containing any data on the store
 * @param preSetListener (optional) function called before a piece of state is updated
 * @param postSetListener (optional) function called after a piece of state is updated
 * @param getListener (optional) function called any time a piece of state is retrieved
 * @return key to retrieve the store
 */
export function createTempStore<T extends object>(
    name: String,
    state: T,
    preSetListener?: (state: T) => any,
    postSetListener?: (oldState: T, newState: T) => any,
    getListener?: (state: T) => any
): Key {
    // Create a proxy to handle the store
    const proxiedState = createProxy(
        state,
        preSetListener,
        postSetListener,
        getListener
    )

    // Set up the store globally, but do not add the key to the global key registry
    const registryKey: Key = { name }
    addStore(registryKey, proxiedState)

    // Return the key to the store
    // If all references are lost to this key, the store will be garbage collected
    return registryKey
}

function createProxy<T extends object>(
    state: T,
    preSetListener?: (state: T) => any,
    postSetListener?: (oldState: T, newState: T) => any,
    getListener?: (state: T) => any
): T {
    return new Proxy<T>(state, {
        set(target: T, property: string | symbol, value: any, receiver: any) {
            const oldState = Object.assign({}, target)
            preSetListener && preSetListener(oldState)
            Reflect.set(target, property, value, receiver)
            postSetListener && postSetListener(oldState, target)
            return true
        },
        get(target: T, property: string | symbol, receiver: any) {
            getListener && getListener(target)
            return Reflect.get(target, property, receiver)
        }
    })
}
