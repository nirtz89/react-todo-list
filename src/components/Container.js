import {useState} from 'react';
import Header from './Header'
import ToDoListBody from './ToDoListBody'

function Container() {

   const [list, setList] = useState(["לשטוף כלים","לסדר את הבית","להוציא את הכלב"]);
   const [oldList, setOldList] = useState([]);

    function addMatala(newMatala) {
        setList([...list, newMatala]);
    }

    function removeMatala(index) {
        const newList = [...list];
        setOldList([...newList]);
        newList.splice(index,1);
        setList(newList);
    }

    function undo() {
        setList([...oldList]);
    }

  return (
    <div className="container">
        <Header addMatala={addMatala} />
        <ToDoListBody list={list} removeMatala={removeMatala} />
        <br/>
        <button onClick={undo}>UNDO</button>
    </div>
  );
}

export default Container;
