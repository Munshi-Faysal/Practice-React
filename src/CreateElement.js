import React from 'react'


function Todo1(){
    return(
        <div>
            <p>Todo Title</p>
            <p>Todo dece</p>
        </div>
    )
}
function Todo2(){
    return(
        React.createElement(
            "div",
            {},
            React.createElement("p",{},"Todo Title"),
            React.createElement("p",{},"Todo Desc")
            )
    )
}

const CreateElement = () => {
  return <Todo2 />
}

export default CreateElement