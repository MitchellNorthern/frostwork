import { Key } from '../types/types'

export const registry: Key[] = []

/**
 * Adds a new key to the global registry of keys.
 *
 * If a key is found with the same namespace, it will replace that key.
 * This will trigger garbage collection on the previous store with that same name.
 *
 * @param newKey new key to add to the registry
 */
export const addRegistryKey = (newKey: Key): void => {
    let duplicateIndex
    registry.forEach((key, index) => {
        if (key.name === newKey.name) {
            duplicateIndex = index
        }
    })
    if (duplicateIndex) {
        registry.splice(duplicateIndex, 1, newKey)
    } else {
        registry.push(newKey)
    }
}

/**
 * Removes a key from the global registry of keys.
 *
 * This will trigger garbage collection on the store associated with the key.
 *
 * @param name name of the key to remove
 * @returns true if a key was deleted, else false
 */
export const removeRegistryKey = (name: String): boolean => {
    let removeIndex
    registry.forEach((key, index) => {
        if (key.name === name) {
            removeIndex = index
        }
    })
    if (removeIndex) {
        registry.splice(removeIndex, 1)
        return true
    }
    return false
}

/**
 * Gets a registry key by its name.
 *
 * @param name name of the key to find
 * @returns key corresponding to the given name
 */
export const getRegistryKey = (name: String): Key => {
    const filteredKeys = registry.filter(key => key.name === name)
    return filteredKeys && filteredKeys[0]
}
