import { useContext } from 'react'

import Context from './Context'

export const useReduxContext = () => {
    const reduxContext = useContext(Context)

    if (!reduxContext) {
        throw Error('Error!!')
    }

    return reduxContext
}
