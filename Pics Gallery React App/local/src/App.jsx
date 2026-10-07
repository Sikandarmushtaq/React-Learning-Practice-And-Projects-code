import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
   const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
    console.log(response.data);
  };
  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 font-semibold left-1/2 -translate-x-1/2 -translate-y-1/2  ">Loading...</h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url}>
            <div className="h-40 w-44 overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
              ></img>
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  useEffect(function () {
    getData();
  }, [index]);
  return (
    <div className="bg-black h-full text-white">
      <div className="flex flex-wrap gap-4">{printUserData}</div>
      <div className="flex justify-center items-center gap-6 p-4">
        <button
        onClick={()=>{
    if(index>1){
      setIndex(index-1)
      setUserData([])
    }
        }}
         
         className="bg-amber-400 text-sm cursor-pointer text-black px-4 py-2 rounded">
          Prev
        </button>
        <h3>Page {index}</h3>
        <button
        onClick={()=>{
setIndex(index+1)
setUserData([])
        }}
         className="bg-amber-400 text-sm cursor-pointer active:scale-105 text-black px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};  

export default App;
