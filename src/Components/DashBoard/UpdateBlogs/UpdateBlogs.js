import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useParams } from 'react-router';


const UpdateBlogs = () => {
    const {updateId} = useParams();
    const [UpdateBlog, setUpdateBlog] = useState({});
  console.log(updateId)
    useEffect(() => {
        fetch(`http://localhost:5000/UpdateBlogs/${updateId}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                 setUpdateBlog(data)})
    }, []);



    // // update title
    // const handleTitleChange = e => {
    //     const updateTitle = e.target.value;
    //     const updateNews = { title: updateTitle, image: updateBlog.image, description: updateBlog.description };
    //     setUpdateBlog(updateNews)
    // }
    // // update User Email 
    // const handleImageChange = e => {
    //     const updateImage = e.target.value;
    //     const updateNews = { title: updateBlog.title, image: updateImage, description: updateBlog.description };
    //     setUpdateBlog(updateNews)
    // }
    // const handleDescriptionChange = e => {
    //     const updateDescription = e.target.value;
    //     const updateNews = { title: updateBlog.title, image: updateBlog.image, description: updateDescription };
    //     setUpdateBlog(updateNews)
    // }

    // const handleUpdateNews = e => {
    //     const url = `http://localhost:5000/updateBlog/${Id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateBlog)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                alert('Updated')
    //                 setUpdateBlog({});
    //             }
    //         })
    //     e.preventDefault();
    // }
    return (
        <div>
            <h2>This is Update News Page</h2>
            <h3>Title: {UpdateBlog?._id}</h3>
        
           
        </div>
    );
};

export default UpdateBlogs;





// <form onSubmit={handleUpdateNews}>
// {/* <input type="text" onChange={handletitleChange} value={services.title || ''} />
// <input type="text" onChange={handlePriceChange} value={services.price || ''} />
// <textarea type="text" onChange={handleDescriptionChange} value={services.description || ''} /> */}

// <TextField
//     onChange={handleTitleChange}
//     sx={{ width: '50%', m: 1 }}
//     id="standard-basic"
//     value={updateBlog.title || ''}
//     type="text"
//     variant="standard"
// />
// <TextField
//     onChange={handleImageChange}
//     sx={{ width: '50%', m: 1 }}
//     id="standard-basic"
//     value={updateBlog.image || ''}
//     type="text"
//     variant="standard"
// />
// <textarea
//     className="form-control"
//     onChange={handleDescriptionChange}
//     style={{ width: '60%', m: 1 }}
//     id="standard-basic"
//     value={updateBlog.description || ''}
//     variant="standard"
// />

// <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1 }}>Update</Button>
// </form>
 // <ToastContainer
            //     position="top-right"
            // />