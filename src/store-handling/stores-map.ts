import { Key, Store, TempStore } from '../types/types'
import { getRegistryKey } from './store-registry'

export const storesMap = new WeakMap<Key, Store | TempStore>()
export const addStore = (key: Key, store: Store | TempStore): void => {
    storesMap.set(key, store)
}
export const getStore = (key: Key): Store | TempStore => {
    return storesMap.get(key) as Store | TempStore
}
export const getStoreByName = (name: String): Store | TempStore | null => {
    const key: Key = getRegistryKey(name)
    if (key) {
        return storesMap.get(key) as Store | TempStore
    }
    return null
}
