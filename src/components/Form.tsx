import React from "react";
import { Sub } from "../types";
import '../App.css';

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: (neSub: Sub) => void
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

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
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

const Form = ({ onNewSub }:FormProps) => {
    const [inputValues, dispatch] = React.useReducer(formReducer, INITIAL_STATE);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues)
        handleClean();
    };

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({
            type: 'change_value',
            payload: {
                inputName: e.target.name,
                inputValue: e.target.value
            }
        })
    }

    const handleClean = () => {
        dispatch({
            type: 'clear_values'
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name='nick' placeholder="nick" value={inputValues.nick}/>
            <input onChange={handleChange} type="number" name='subMonths' placeholder="subMonths" value={inputValues.subMonths}/>
            <input onChange={handleChange} type="text" name='avatar' placeholder="avatar" value={inputValues.avatar}/>
            <textarea onChange={handleChange} name='description' placeholder="description" value={inputValues.description}/>
            <button type="button" onClick={handleClean}>Clear Form</button>
            <button type="submit">Send</button>
        </form>
    )
}

export default Form;



