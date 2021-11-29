import { Key, Store, TempStore } from '../types/types'

export const storesMap = new WeakMap<Key, Store | TempStore>()
export const addStore = (key: Key, store: Store | TempStore): void => {
    storesMap.set(key, store)
}
export const getStore = (key: Key): Store | TempStore => {
    return storesMap.get(key) as Store | TempStore
}
