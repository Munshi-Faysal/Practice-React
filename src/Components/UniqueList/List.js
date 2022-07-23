import React from 'react'
import CardDesign  from '../Card'
import {v4 as uuidv4} from "uuid";

const todos = [
    {
        id: uuidv4(),
        title : "Call Home1",
        desc : "This is Desc1"
    },
    {
        id: uuidv4(),
        title : "Call Father1",
        desc : "This is Desc1"
    },
    {
        id: uuidv4(),
        title : "Call Mother1",
        desc : "This is Desc1"
    }
]

const List = () => {
  return <div>
    {todos.map((todo) => {
      const {id, title, desc} = todo
      console.log(id)
      return <CardDesign key={id} Title = {title} Desc= {desc}/>})}
  </div>
}

export default List