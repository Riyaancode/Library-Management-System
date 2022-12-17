import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom'


function List(props) {
const [books,setbooks] = useState([])


  useEffect( ()=>{
  
    fetchBooks();

  }, [])


  const fetchBooks = async () => {
    try {
      const res = await axios.get("/getbooksdata");
      setbooks(res.data);
     
    } catch (error) {
      console.log("BOOKS: ERROR", error);
      // setErrors(error.response.data);
    }
  };


  const deleteBook = async (id) => {
    const x = window.confirm("Are you sure?");
    console.log(x);
    if (!x) return null;
    try {
      const res = await axios.delete("books/" + id);

      fetchBooks();
      console.log("BOOKS:", res);
    } catch (error) {
      console.log("BOOKS: ERROR", error);
      alert(error.response.data);
    }
  };

  


  return (
    <>
    <div className="container mt-5">
    
      <h1 className="text-center" >List</h1>
      <button>
      <NavLink className="nav-link" to='/addbooks' >
                  Add Books
                </NavLink>
                </button>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Rating</th>
            {/* <th>Available Books</th> */}
            <th>Stock</th>
            <th>Image</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {
            
          books.map((b) => (
            
            <tr key={b._id} className="align-baseline">
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.publisher}</td>
              <td>{b.ratings}</td>
              {/* <td>{b.availableBooks}</td> */}
              <td>{b.stocks}</td>
              <td><img src={require("../uploads/"+b.image)} alt={b.title} width="100px" /></td>
              <td><button type="button" class="btn btn-danger" onClick={() => deleteBook(b._id)}>DELETE</button></td>
            </tr>
          
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
}

export default List;
