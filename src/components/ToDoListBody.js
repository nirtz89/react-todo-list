import ToDoListItem from './ToDoListItem'

// props = משתנים שמועברים לתוך הקומפוננטה
function ToDoListBody(props) {
  return (
    <div className="todolist-body">
      {
        props.list.map((matala, index)=>{
          return <ToDoListItem text={matala} index={index} removeMatala={props.removeMatala} />
        })
      }
    </div>
  );
}

export default ToDoListBody;
