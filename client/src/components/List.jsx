import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AddBooks from "./AddBooks";


function List(props) {
const [books,setbooks] = useState([])


//   useEffect(()=>{
//  axios.get('/getbooksdata').then((res)=> {
//   console.log(res)
//   console.log(res.headers)
//    setbooks(res)
//   })

  // }, [])


  return (
    
    <div className="List">
      <AddBooks />
     {/* {books} */}
    </div>
  );
}

export default List;
