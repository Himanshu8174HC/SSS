import React from "react"
import "./Note.css"

function Note(props){
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleClickEdit() {
    props.onEdit(props.id);
  }
  

    return <div className="note">
      <h1>{props.Topic_tag}</h1>
      <hr></hr>
      <p>{props.content}</p>
      <div className = "NOTEdiv">
      <i onClick={handleClickEdit} className="far fa-edit"></i>
      <i onClick={handleClick} className="far fa-trash-alt"></i>
      </div>
      
    </div>

}

export default Note;