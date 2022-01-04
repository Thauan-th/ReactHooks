import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'
const UseContext = (props) => {
    const context = useContext(DataContext);
    function addNumber(n){
        context.setState({
            ...context.state,
            number:context.state.number + n
        })
    }
    const {number,setNumber}=useContext(AppContext)
    const {text,setText}=useContext(AppContext)
    
    return (
        
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title='Ex01'></SectionTitle>
            <div className="center">
                <span className="text">
                    {context.state.text}
                </span>
                <span className="text">
                    {context.state.number}
                </span>
                <div>
                    <button className="btn" onClick={()=>addNumber(1)}>+1</button>
                    <button className="btn" onClick={()=>addNumber(-1)}>-1</button>
                </div>
            </div>
            <SectionTitle title='Ex02'></SectionTitle>
            <div className="center">
                <span className="text">{number}</span>
                <div>
                <button className="btn" onClick={()=>setNumber(number+1)}>+1</button>
                    <button className="btn" onClick={()=>setNumber(number-1)}>-1</button>
                </div>
                <span className="text">{text}</span>
            </div>
        </div>
    )
}

export default UseContext
