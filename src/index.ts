import { getStore, getStoreByName } from './store-handling/stores-map'
import { createStore, createTempStore } from './stores/create-store'

export const Frostwork = {
    getStore,
    getStoreByName,
    createStore,
    createTempStore
}
