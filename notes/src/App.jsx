import { useState } from "react";

function App() {
  const[title,setTitle] = useState();
 const[detail,setDetail]= useState();
 const[notes, setNotes ]= useState([]);

  function submitHandler(event){
    event.preventDefault();
    if (!title.trim() || !detail.trim()) return;
    setNotes([...notes, { title: title, detail: detail }]);
    setDetail("");
    setTitle("");
  }

  function deleteNote(i) {
    setNotes(notes.filter((_, index) => index !== i));
  }

  return (
    <div className="main">
      
      <div className="container1">
        <form>
          <input type="text" placeholder="Enter Title" className="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <input type="text" placeholder="Enter your task" className="detail"  value={detail} onChange={(e)=>setDetail( e.target.value)}/>
          <button onClick={submitHandler} className="submit" >submit</button>
        </form>
      </div>
      <div className="container2">

        {notes.map((n,index) => (<div className="box" key={index}> 
          <h3>{n.title}</h3>
          <p>{n.detail}</p>
          <button className="delete" onClick={()=>deleteNote(index)} >delete</button>
        </div>
        ))}


      

      </div>
    </div>
  );
}

export default App;