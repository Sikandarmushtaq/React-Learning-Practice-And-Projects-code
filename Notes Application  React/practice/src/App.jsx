import { useState } from "react";

const App = () => {
   const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
     const [task, setTask] = useState([]);

     const deleteNote = (idx)=>{
      const copyTask = [...task]
      copyTask.splice(idx,1)
      setTask(copyTask)
     }

  const sumbithandler = (e) => {
    e.preventDefault();
    const copytask  = [...task]
    copytask.push({title,details})
    setTask(copytask)
   
    console.log(task)


    setTitle("")
    setDetails("")
  };
 
  return (
    <div className="h-screen bg-black text-white ">
      <form
        onSubmit={(e) => {
          sumbithandler(e);
        }}
        className="flex justify-between items-start  p-10"
      >
        <div className="flex  w-1/2 items-start gap-4 flex-col">
          <input 
          value = {title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
            className="px-5  w-full py-2 border-2 rounded"
            type="text"
            placeholder="Enter Notes Heading"
          ></input>
          <textarea
          value = {details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
            type="text"
            className="px-5 h-32 py-2  w-full  border-2 rounded"
            placeholder="Enter Notes Heading"
          ></textarea>
          <button className="bg-white text-black rounded px-5 py-2">
            Add Notes
          </button>
        </div>
      </form>
      <h1 className="flex px-10 text-2xl text-zinc-600">Your Notes</h1>
      <div className="p-10 flex gap-5 flex-wrap overflow-auto ">
    {task.map(function(elem,idx){
      if(elem.title && elem.details === " "){
        alert("first fill the information")
      }
      return    <div key={idx} className="  h-52 w-42 flex flex-col justify-between items-start bg-white rounded p-4 text-black">
      <div>
          <h3 className=" text-xl font-bold">{elem.title}</h3>
        <p className="mt-2 text-gray-500">{elem.details}</p>
        </div>
        <button onClick={()=>{
          deleteNote(idx)
        }} className="bg-red-400 px-3 py-2 text-black  text-center">Delete Note</button>
      </div>
    })}
      </div>
    </div>
  );
};

export default App;
