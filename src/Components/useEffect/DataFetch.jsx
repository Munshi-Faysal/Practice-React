import React, {useEffect, useState} from 'react'

import Data from './Data';



//let msgError = <p>{err}</p>
let messageLoading = <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>;

const DataFetch = () => {
    const [emp, setEmp] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
console.log(emp);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            if(!res.ok){
                throw Error("Opps Sorry");
            }else{
                return res.json();
            }
           
        })
        .then((data)=>{
            setEmp(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((err)=>{
            setError(err.message)
            setIsLoading(false);
        })
    },[]);
    const todosElement =  emp && emp.map(faq=><Data key={faq.id} {... faq} />);

  return (
    <div >
        {error && <p>{error}</p>}
        {isLoading && messageLoading}
        <h1 className='text-danger'>Todos</h1>
        {/* {emp && emp.map((x)=>{
            return <p key={x.id}>{x.title}</p>
        })} */}
        
       {todosElement}
        
    </div>
  );
};
export default DataFetch