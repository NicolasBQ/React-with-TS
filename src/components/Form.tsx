import React from "react";
import { Sub } from "../types";
import useNewSubForm from "../hooks/useNewSubForm";
import '../App.css';



interface FormProps {
    onNewSub: (neSub: Sub) => void
}


const Form = ({ onNewSub }:FormProps) => {
    const [inputValues, dispatch] = useNewSubForm();

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



