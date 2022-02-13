import React, { FC, ReactNode } from 'react'
import { Store } from 'redux'

import Context from './Context'

type ProviderType = {
    store: Store
    children: ReactNode
}

const Provider: FC<ProviderType> = ({ store, children }) => {
    return (
        <div>
            <Context.Provider value={{ store }}>{children}</Context.Provider>
        </div>
    )
}

export default Provider
