import { useState } from "react";
import axios from 'axios';



function AddBooks(props) {
 
  const [booksdata, setbooksdata] = useState({
    title: "",
    author: "",
    publisher: "",
    stocks: "",
    ratings: ""
  });

const postData = async (e) =>{
e.preventDefault();

axios.post("/addbooksdata", booksdata).then(() => {
 
  alert("successful insert");
}
)

/*
const {title,author,publisher,stocks,ratings } = booksdata;

const res = await fetch("/addbooksdata", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    title,author,publisher,stocks,ratings 
  })
});

const data = await res.json();

if(res.status === 422 || !data){
  window.alert("Invalid")
  console.log("Invalid")
}else{
  window.alert("Submitted Successfully")
  console.log("Submitted Successfully")
}*/

}

let name,value;

const handleInputs =(e)=>{
console.log(e);
name = e.target.name;
value = e.target.value;

  setbooksdata({...booksdata,[name]:value})
}


 




  return (
    <>
    <div className="Input">
    <h1>Books</h1>
  <br/>


  <form method="post">
     <input placeholder="Title" name="title" type="text" value={booksdata.title} onChange={handleInputs} />
     <input placeholder="Author" name="author" type="text" value={booksdata.author} onChange={handleInputs} />
     <input placeholder="Publisher" name="publisher" type="text" value={booksdata.publisher} onChange={handleInputs} />
     {/* <input placeholder="image" name="image" type="file" value={booksdata.image} onChange={handleInputs} /> */}
     <input placeholder="stocks"  name="stocks" type="number" value={booksdata.stocks} onChange={handleInputs} />
     <input placeholder="ratings" name="ratings" type="number" value={booksdata.ratings} onChange={handleInputs} />
    <button type="submit" onClick={postData}>Submit</button>
    
     </form>
         
        
    
    </div>
    </>
  )
}

export default AddBooks;
