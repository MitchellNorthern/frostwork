import { createStore } from './store/createStore'
import { combineStores } from './store/combineStores'
import { getStore } from './store/getStore'
import {
    Store,
    OpticStore,
    CombinedStore,
    KeyAndStore
} from './types/storeTypes'

interface Frostwork {
    readonly createStore: (obj: Store) => OpticStore
    readonly combineStores: (keysAndStores: KeyAndStore[]) => CombinedStore
    readonly getStore: () => void
}

const Frostwork: Frostwork = {
    createStore,
    combineStores,
    getStore
}

export default Frostwork
