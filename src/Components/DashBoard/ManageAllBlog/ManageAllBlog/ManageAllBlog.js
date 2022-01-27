import React, { useEffect, useState } from 'react';
import ShowAllBlog from '../../ManageAllBlog/ShowAllBlog/ShowAllBlog'
import './ManageAllBlog.css'
const ManageAllBlog = () => {
    const [allBlog, setAllBlog] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blog')
        .then(res=> res.json())
        .then(data => setAllBlog(data))
    },[])


    const handleBlogDelete = (id) => {
        const proceed =window.confirm('Are you sure you want to delete?')
        if(proceed) {
  
          const url = (`http://localhost:5000/blogs/${id}`)
          fetch(url, {
              method: 'DELETE'
          })
          .then(response => response.json())
          .then(data =>{
              console.log(data)
              if(data.deletedCount > 0){
                  alert('Deleted successfully');
                  const remaining = allBlog.filter(order => order._id !== id)
                  setAllBlog(remaining)
              }
          })
  
        }

    }
    return (
        <>
        
        <div className="manageAllBooking-container">
        {
            allBlog?.map(singleOrder => <ShowAllBlog key={singleOrder._id} singleOrder={singleOrder} handleBlogDelete={handleBlogDelete}></ShowAllBlog>)
        }
    </div>
    </>
    );
};

export default ManageAllBlog;