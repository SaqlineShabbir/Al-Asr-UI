import React from 'react';
import './AddBlog.css'
import { useForm } from "react-hook-form";

import Swal from 'sweetalert2'

import useFirebase from '../../../hooks/useFirebase';

const AddBlog = () => {
    const {user} = useFirebase()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Successfully Added',
                    'success'
                  )
             reset()
         }
        })
        
     } 
       
    

    return (
        <>
       
        <div className="AddReview">
        <h4 className="mt-5 text-center">You Can Add A Experience Here</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input defaultValue={user?.displayName} {...register("name", { required: true })} placeholder="user Name"/>
  <input defaultValue={user?.photoURL} {...register("photoUrl")} placeholder="Image Url" />
  <input 
  {...register("serviceName", { required: true })}
            placeholder="Service Name"
          />
          <input {...register("img")} placeholder="Image Url" />
          <input {...register("location")} placeholder="Location Address" />
          <input {...register("price")} placeholder="Price" />
          <input type="date" {...register("Date")} placeholder="Date" />
  <textarea {...register("description")} placeholder="Experince Message" required/>
  <input {...register("number", { min: 0, max: 5 })} required placeholder="Review rating out of 5"/>
  
  <input type="submit" />
</form>
 </div>
 </>
    );
};

export default AddBlog;