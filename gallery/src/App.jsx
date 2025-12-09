import axios from "axios"
import { useEffect, useState } from "react"


function App() {

  const [ userdata, setUserdata]= useState([]);
   const [ index, setIndex]= useState(1);


  async function GetData (){
    const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`);
    setUserdata(response.data)
    console.log(userdata)
    
  }
 
  useEffect(function(){
    GetData();
  },[index])


  let printUserdata;
   if(userdata.length>0){
    printUserdata = userdata.map(function(element , indexx){
      return<div key={indexx}>
            <a href={element.url} target="_blank">
           <div className="h-55 w-55 gap-20">
          <img src={element.download_url} className="h-full w-full rounded-xl object-cover  "/>
        </div>
        <h3 className="text-white font-bold text-xl" >{element.author}</h3>
       </a>
      </div>

    })
    
  }else{
    printUserdata= <h3 className="text-xl text-gray-600 font-semibold flex justify-center items-center ml-200">Loading................</h3>;
  }


  return (
    <>
     <div className="bg-black m-0 p-0 overflow-auto h-screen"> 
      <div className=" h-[80%] flex flex-wrap gap-10 p-5  ">
       {printUserdata}
      </div>

      </div> 
      <div className=" bg-black flex justify-center items-center gap-4">
        <button className="bg-teal-300 text-xl mb-7 p-4 font-bold rounded-xl cursor-pointer active:scale-80 " onClick={()=>{
          setIndex(index-1);
          setUserdata([])
        }} disabled={index === 1} >
          Prev</button>
        <h2 className="text-2xl mb-7 text-white" >{index}</h2>
        <button className="bg-teal-300 text-xl mb-7 p-4 font-bold rounded-xl cursor-pointer  active:scale-80 " onClick={()=>{
          setIndex(index+1);
          setUserdata([]);
        }} >Next</button>
        
      </div>
    </>


  )
}

export default App
