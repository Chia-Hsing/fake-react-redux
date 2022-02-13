import { Action, Dispatch } from 'redux'

import { useReduxContext } from './useReduxContext'

export const useDispatch = <A extends Action>() => {
    const { store } = useReduxContext()

    return store.dispatch as Dispatch<A>
}
