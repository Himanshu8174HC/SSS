import React from "react"
import "./Note.css"

function Note(props){

    return <div className="note">
      <h1>{props.Topic_tag}</h1>
      <p>{props.content}</p>
      <button>EDIT</button>
    </div>

}

export default Note;