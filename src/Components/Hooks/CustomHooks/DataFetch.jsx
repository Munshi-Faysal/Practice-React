import React, {useState} from 'react'
import { useEffect } from 'react';

import Data from '../.././useEffect/Data';

    //let msgError = <p>{err}</p>
    let messageLoading = <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>;

const DataFetch = ()=>{
    const {data,isLoading,error} = useEffect("https://jsonplaceholder.typicode.com/todos");
    const errorMessage = <p>{error}</p>
    const todosElement =  data && data.map(faq=><Data key={faq.id} {... faq} />);

  return (
    <div >
        <h3 className="headingStyle">Data Fetch From Custom Hooks Folder</h3>
        {error && <p>{errorMessage}</p>}
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