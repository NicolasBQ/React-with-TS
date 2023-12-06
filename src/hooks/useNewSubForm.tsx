import React from "react"
import { Sub } from "../types";

interface FormState {
    inputValues: Sub
}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}

type Action = {
    type: 'change_value',
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: 'clear_values'
}

const formReducer = (state: FormState['inputValues'], action: Action) => {
    const { type } = action;

    switch (type) {
        case 'change_value':
            const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName] : inputValue
            }
        case 'clear_values':
            return INITIAL_STATE
        default:
                return state
    }
}


const useNewSubForm = () => {
    return React.useReducer(formReducer, INITIAL_STATE);
}

export default useNewSubForm