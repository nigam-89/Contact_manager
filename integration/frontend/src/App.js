import React, { useEffect ,useState} from 'react'
import Axios from 'axios'

const App = () => {
  const [data,setData]=useState("");

  // const getData=async()=>{
  //   // const result=await Axios.get("http://localhost:5000/getdata");
    
  // }

  useEffect(()=>{
    Axios.get("http://localhost:5000/getdata")
    .then((result)=>{
      setData(result.data);
    })    
    .catch((err)=>{
      console.log(err);
    })
  });

  return (
    <>
    <div>{data}</div>
    <div>this is frontend data</div>
    </>
  )
}

export default App