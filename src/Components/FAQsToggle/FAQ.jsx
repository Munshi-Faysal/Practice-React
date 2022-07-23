import React,{useState} from 'react'
import style from "./faq.module.css"

const FAQ = ({id,title,desc}) => {
    const[faq,setfaq] = useState(false);
  return (
    <article className={style.faq}>
        <div>
            <h3>{title}</h3>
            <button onClick={()=>{setfaq(!faq)}}>{faq ?"-":"+" }</button>
        </div>
        {faq &&(
                <p>{desc}</p>
            )}
    </article>
  )
}

export default FAQ

