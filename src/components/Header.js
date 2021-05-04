import { useState } from 'react';

function Header(props) {

  const [newMatalaName, setNewMatalaName] = useState('');

    return (
      <div className="header">
          <h1>To Do List</h1>
          <input type="text" onInput={(element) =>{setNewMatalaName(element.target.value)}} />
          <button onClick={() => {props.addMatala(newMatalaName)}}>ADD</button>
      </div>
    );
  }
  
  export default Header;
  