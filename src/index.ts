import { createStore } from './store/createStore'
import { combineStores } from './store/combineStores'
import { getStore } from './store/getStore'

interface Frostwork {
    readonly createStore: () => void
    readonly combineStores: () => void
    readonly getStore: () => void
}

const Frostwork: Frostwork = {
    createStore,
    combineStores,
    getStore
}

export default Frostwork
