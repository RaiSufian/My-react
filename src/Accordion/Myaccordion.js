import { useState } from "react";

const Myaccordion = ({ question, answer }) => {
    const [show,setshow] = useState(false)
    return (
        <>
            <div className="card">
                <p onClick={()=>setshow(!show)}>{show? "-":"+"}</p>
                <h2>
                    {question}
                </h2>
                {show && <h6 className="answer">{answer}</h6>}
            </div>

        </>
    )
}
export default Myaccordion;