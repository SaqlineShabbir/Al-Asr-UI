import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = (props) => {
    const {img, serviceName, _id,name,photoUrl,description } = props.blog;

    

    return (
        <div>
        <div className="service-container shadow">
            <img src={img} alt=""/>
           <div className="service-text">
           <h5>{serviceName}</h5>
            {description ?.slice(0,70)}<br/>

           </div>
       
       <Link to={`/blogDetails/${_id}`}><button className="service-button">View Details <i className="fas fa-angle-double-right"></i></button></Link>
       </div>
     
    </div>
    );
};

export default Blog;