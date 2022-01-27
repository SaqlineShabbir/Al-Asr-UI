import React, { useState } from 'react';
import './ShowAllBlog.css'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
const ShowAllBlog = (props) => {
    const {img,status,  serviceName,description,_id,name, phone} = props.singleOrder;
  const [orderId, setOrderId] = useState("")

  const handleOrderId = (Id) =>{
      setOrderId(Id)
      
  }
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, { 
            method: 'PuT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result => {
            if(result.modifiedCount){
              Swal.fire(
                'WOW!',
                'Successfully Changed',
              )
                
            }
        })
    };
    return (
        <div class="card mb-3" style={{"maxWidth": "540px"}}>
        <div class="row g-0">
          <div class="col-md-4 card-img">
            <img src={img} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">{serviceName}</h4>
              {/* <p class="card-title">{description}</p> */}
             
              
     <form onSubmit={handleSubmit(onSubmit)}>
      
      <select onClick={()=> handleOrderId(_id)} {...register("status")}>
        <option value={status}>{status}</option>
        <option value="Approved">Approved</option>
        <option value="Pending">Pending</option>
        
      </select>
      <input type="submit" />
      <button onClick={()=>props.handleBlogDelete(_id)} className="delete-button">Delete <i className="fas fa-angle-double-right"></i></button>

      <Link to={`/dashboard/updateBlog/:${_id}`} className="delete-button">Update <i className="fas fa-angle-double-right"></i></Link>
    </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowAllBlog;