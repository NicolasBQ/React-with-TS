import React from 'react';
import { Sub } from '../types';


interface Props {
    // children: JSX.Element -> Children element
    subs: Array<Sub>
}

// UTILIZAR EL TIPEADO EN FUNCIONES SOLO CUANDO SEA NECESARIO (POR EJEMPLO CUANDO EL COMPONENTE TENGA CHILDREN)
//const List: React.FunctionComponent<Props>
const List =  ({subs}:Props) => {
    const renderList = ():Array<JSX.Element> => {
        return subs.map(sub => {
            return (
                <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
            </li> 
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;