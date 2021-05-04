function ToDoListItem(props) {
    return (
      <div className="todolist-item">
          {props.text} <button onClick={()=>props.removeMatala(props.index)}>🚑</button>
      </div>
    );
  }
  
  export default ToDoListItem;
  