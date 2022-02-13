import React, { createContext } from 'react'
import { Store } from 'redux'

type ContextType = {
    store: Store
}

export default createContext<ContextType | null>(null)
