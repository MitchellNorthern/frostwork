import { createStore } from './store/createStore'
import { combineStores } from './store/combineStores'
import { getStore } from './store/getStore'
import { Store, OpticStore } from './types/storeTypes'

interface Frostwork {
    readonly createStore: (obj: Store) => OpticStore
    readonly combineStores: () => void
    readonly getStore: () => void
}

const Frostwork: Frostwork = {
    createStore,
    combineStores,
    getStore
}

export default Frostwork
