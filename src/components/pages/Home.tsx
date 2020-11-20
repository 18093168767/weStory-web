import axios from "axios";
import "../../utils/mock.js"
import React, { useState, useEffect } from "react";

import { Route, withRouter } from "react-router-dom";
const Home = () =>{
  interface ListInterface {
    name: string;
    age: number;
    id: string;
  }

  let [data, setData] = useState<ListInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index,setIndex] = useState(0)

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async()=>{
      const result = await axios.get("/userLists");
      setData(result.data.userinfo);
      setIndex(1)
      setIsLoading(false);
    }
    fetchData();
  }, [index])

    return(
      <div>
      {isLoading ? (
        <div>Loading ...</div>
        ) : (
        <ul>
          {data.map((item, i) => (
          <li key={i}>{item.name}
          </li>
          ))}
        </ul>
      )}
      </div>
    )
  }
  
  export default Home