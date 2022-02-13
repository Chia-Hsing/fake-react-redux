import { useReducer, useRef, useEffect } from 'react'
import { Action, Dispatch } from 'redux'

import { useReduxContext } from './useReduxContext'

type Selector<State, Selected> = (state: State) => Selected
type EqualityFn<Selected> = (a: Selected, b: Selected) => boolean

const defaultEqualityFn = <Selected>(a: Selected, b: Selected) => a === b

export const useSelector = <State, Selected>(
    selector: Selector<State, Selected>,
    equalityFn: EqualityFn<Selected> = defaultEqualityFn
) => {
    const { store } = useReduxContext()

    const [, forceRender] = useReducer((s) => s + 1, 0)

    const prevStateSelected = useRef<Selected | null>(null)
    const currentStateSelected = selector(store.getState())

    console.log(store.getState())
    function checkEquality() {
        const newSelectedState = selector(store.getState())
        if (equalityFn(newSelectedState, prevStateSelected.current!)) {
            return
        }

        prevStateSelected.current = newSelectedState
        forceRender()
    }

    useEffect(() => {
        const unsubscribe = store.subscribe(checkEquality)

        return unsubscribe
    }, [])

    return currentStateSelected
}
