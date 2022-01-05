import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState ,allReducers  } from '../../store'
import {number_add2,login} from '../../store/actions/'
const UseReducer = (props) => {
    const [state,dispatch]=useReducer(allReducers,initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{state.number}</span>
                <span className='text'>{state.user}</span>
                <div>
                    <button className="btn" onClick={()=>login(dispatch,'Thauan')}>login</button>
                    <button className="btn" onClick={()=>number_add2(dispatch)}>+2</button>
                    <button className="btn" onClick={()=>dispatch({type:'number_multi7'})}>*7</button>
                    <button className="btn" onClick={()=>dispatch({type:'number_div25'})}>/25</button>
                    <button className="btn" onClick={()=>dispatch({type:'number_parse'})}>parse</button>
                    <button className="btn" onClick={()=>dispatch({type:'number_clear'})}>0</button>
                    <button className="btn" onClick={()=>dispatch({type:'number_addN',payload:-10})}> 10 negative</button>
                    <button className="btn" onClick={()=>dispatch({type:'number_addN',payload:+10})}> 10 positive</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
