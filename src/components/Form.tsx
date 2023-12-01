import React from "react";
import { Sub } from "../types";
import '../App.css';

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: (neSub: Sub) => void
}

const Form = ({ onNewSub }:FormProps) => {
    const [inputValues, setInputValues] = React.useState<FormState['inputValues']>({
        nick: '',
        subMonths: 0,
        avatar: '',
    })

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues)
    };

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name] : e.target.value
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name='nick' placeholder="nick" />
            <input onChange={handleChange} type="number" name='subMonths' placeholder="subMonths" />
            <input onChange={handleChange} type="text" name='avatar' placeholder="avatar" />
            <textarea onChange={handleChange} name='description' placeholder="description" />
            <button>Send</button>
        </form>
    )
}

export default Form;



