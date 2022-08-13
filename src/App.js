import React from "react";
import List from "./Components/UniqueList/List";
import CreateElement from "./CreateElement";
import { ReactBootstrap } from "./Components/ReactBootstrap/ReactBootstrap";
import Toggle from "./Components/Toggle/Toggle";
import FAQS from "./Components/FAQsToggle/FAQS";
import DataFetch from "./Components/Hooks/CustomHooks/DataFetch";

function App(){

    // let items = [];
    // for(let i = 0; i<Data.length; i++){
    //     items.push( <CardDesign Title ={Data[i].title} Desc={Data[i].desc} /> );
    // }
    // items = Data.map(i => <CardDesign Title ={i.title} Desc={i.desc} />)
return <div>
    
    {/* {Data.map((i, index) => <CardDesign key={index} Title ={i.title} Desc={i.desc} />)} */}

    {/* <List /> */}
    {/* {users.map((item)=> console.log('Name = ' + item.fullName + "  Age = " + item.age + "  Phone = " + item.Phone.map((i)=> "office =  "+ i.office +"  And  " +" home = " +i.home)))}
{users.map((users , index) =>(
    <article key={index}>
        <h3>{users.fullName}</h3>
        <p>{users.age}</p>
        {users.Phone.map((i, index)=> (
            <div key={index}>
                <p>{i.home}</p>
                <p>{i.office}</p>
            </div>
        ))}
    </article>
) )} */}
{/* <Card2 fullName ="jewel talukder" Age = "19" /> */}
{/* <CreateElement /> */}
{/* <ReactBootstrap /> */}
{/* <Toggle/> */}
{/* <FAQS /> */}
<DataFetch />
</div>
}
 export default App; 