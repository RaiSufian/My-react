import React, { useState } from 'react'
import {questions} from './accordionAPI'
import "./accordian.css"
import Myaccordion from './Myaccordion'

const Accordion= ()=>{
    const [data, setData] = useState(questions)
    return(
        <>
           <div className="accordion_box">
           {
                data.map((val)=>{
                    const {id} = val;
                    return <Myaccordion key={id} {...val}/>;
                })
            }
           </div>
        </>
    );
}
export default Accordion;