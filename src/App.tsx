import { useEffect } from "react";
import axios from "../node_modules/axios/index";
import { useState } from 'react';

interface AppType {
  _id: number;
  name: string;
}
const App = () => {
  const [value,setValue] = useState('')
  const [prod,setProd] = useState<AppType[]>([])
  const [loading,setIsLoading] = useState(true)

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://api-v2.elchocrud.pro/api/v1/8ba52e0142e51160a0ffc9820ae9e95d/product"
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally{
      setIsLoading(false)
    }
  };
const postData = async()=> {
  try {
    const { data } = await axios.post(
      "https://api-v2.elchocrud.pro/api/v1/8ba52e0142e51160a0ffc9820ae9e95d/product", {
        name: value
      }
    );
    setProd(data)
  } catch (e) {
    console.error(e);
  }
}

  useEffect(()=> {
    getData()
  },[prod])
  
  return (
    <>
      <div>
        <div>
          <input type="text"  value={value} onChange={(e)=> setValue(e.target.value)}/>
          <button onClick={postData} >Add</button>
        </div>
        <div>
          {loading ? <h1>Loading...</h1> : (
          prod.map((el)=> (
              <h1 key={el._id}>{el.name}</h1>
            ))
          )}
        </div>
        
      </div>
cc    </>
  );
};

export default App;
