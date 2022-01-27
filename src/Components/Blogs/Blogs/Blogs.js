import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
const Blogs = () => {
    const [allBlog, setAllBlog] =useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size= 10;
    useEffect(()=>{
        fetch(`http://localhost:5000/allBlog?page=${page}&&size=${size}`)
        .then(res=> res.json())
        .then(data => {
           
            setAllBlog(data.blogs)
            const count = data.count;
            const pageNumber = Math.ceil(count/10);
            setPageCount(pageNumber)
        })
    },[page])
    const exactItem = allBlog?.filter(pd => pd.status === 'Approved')
    return (
        <>
      <div className="blogs-text-main">
      <div className="blogs-texts">
             <p className="text-center">Our Blogs</p>
             <h5 className="text-center">Every Single Blog</h5>
             <p className="text-center pxx">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat nam distinctio a similique maiores repellat recusandae, nobis asperiores. Suscipit vitae fugit quisquam, animi, aperiam laudantium veritatis dicta quo voluptatibus neque earum quas quia nesciunt dolor repudiandae. Quisquam, accusamus placeat?</p>
        </div>
      </div>
        <div className="blogs-main">
        {
           exactItem?.map(blog => <Blog key={Blog._id} blog={blog}></Blog>)
        }
        </div>
        <div className="pagination">
            {
                [...Array(pageCount).keys()].map(number => <button
                className={number === page ? 'selected' : ''}
                    key={number}
                    onClick={()=> setPage(number)}
                
                >{number + 1}</button>)
            }
        </div>
        </>
    );
};

export default Blogs;