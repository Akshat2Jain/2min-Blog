import React, { useState,useEffect } from 'react'
import Final from './Final'
import Infromation from './Infromation'
import Rules from './Rules'
import "./New.css"

const Form = () => {
    const [page,setPage]=useState(0)
    const FormTitle=["Rules","Information","Final"]
    const pageDisplay=()=>{
        if (page === 0) {
            return <Rules/>;
          } else if (page === 1) {
            return <Infromation/>;
          } else {
            return <Final/>;
          }
    }
    useEffect(() => {
      alert("This page is in progress.Please come later")
    }, [])
    
  return (
    <div className='form'>
        <div className='progressbar'></div>
        <div className='form-container'>
            <div className='header'>
                <h1>{FormTitle[page]}</h1>
            </div>
            <div className='body'>{pageDisplay()}</div>
            <div className='footer'>
                <button
                disabled={page===0} 
                onClick={()=>{setPage((e)=>e-1)}}>Prev</button>
                <button
                disabled={page===FormTitle.length-1} 
                onClick={()=>{setPage((e)=>e+1)}}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Form