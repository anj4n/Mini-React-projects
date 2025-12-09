import React,{useState} from "react";


function Todolist(){

    const[tasks, setTasks]=useState([]);
    const[newtask,setNewtask]= useState("");



    function Handleinput(e){
        setNewtask(e.target.value)
    }

    function Addtask(){
        if(newtask.trim() !== "" ){
        setTasks([...tasks ,newtask]);
        setNewtask("")}
    }
    function Handledelete(index){
       const updatedtask = tasks.filter((_,i) => i!=index); 
       setTasks(updatedtask);

    }
    function Handleup(index){
        if(index>0){
        const updatedtask = [...tasks];
        [updatedtask[index] , updatedtask[index-1]]=[updatedtask[index-1],updatedtask[index]];
        setTasks(updatedtask)
        


        
        }

    }

    function Handledown(index){
        if (index < tasks.length - 1){

            const updatedtask = [...tasks];

            [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1] , updatedtask[index]]
            setTasks(updatedtask)

        }
    }

 


    return(
        <div className="box">
            <h3>To Do list</h3>

            <input type="text" placeholder="Enter your task" value={newtask} className="textbox" onChange={Handleinput}></input><br></br>
            <button onClick={Addtask} className="add" >Add</button>
              <ol>
                {tasks.map((task,index) => (
                    <li key={index}>
                        <input type="checkbox" className="checkbox"></input>
                        <span >{task}</span>
                        
                        <button onClick={ ()=>Handledelete(index)} className="buttons">X</button>

                        <button onClick={ ()=>Handleup(index)} className="buttons">⬆</button>
                        <button onClick={()=>Handledown(index)} className="buttons">⬇</button>
                        

                        
                    </li>
                ))}
            </ol>

        </div>
    );

}
export default Todolist;