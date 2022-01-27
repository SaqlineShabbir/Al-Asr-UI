import React ,{ useEffect , useState}from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2'
import Rating from 'react-rating';
import useFirebase from '../../../hooks/useFirebase';
import Header from '../../Shared/Header/Header';
import './BlogDetails.css'
import Footer from '../../Shared/Footer/Footer';
const BlogDetails = () => {
    const {user} =useFirebase()
    const {blogId} = useParams();
    const [blogs,setBlog]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blog')
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
             setBlog(data)
            
        })
    },[])

    const exactItem = blogs?.filter(pd => pd._id === blogId)


    return (
        <>
        <Header></Header>
        <div>
        <div className="blog-details-main" style={{ backgroundImage: `url(${exactItem[0]?.img})`,backgroundRepeat: 'no-repeat' }} >
            <div className="blog-details-banner">
            <h1 className="text-white w-50 fw-bold"> {exactItem[0]?.serviceName}</h1>
            
            <div className="user-in-details d-flex">
                <img src={exactItem[0]?.photoUrl} alt="" />
            <div className="pt-4">
            <p> {exactItem[0]?.name}</p>
            <p className="text-white"> {exactItem[0]?.Date}</p>
            </div>
            </div>
            <hr className="text-white w-75 " />
            
            </div>
            
            
        </div>
       
        <div className="description">
            <h2>{exactItem[0]?.location}(${exactItem[0]?.price})</h2>
        <Rating initialRating={exactItem[0]?.number} className="text-warning" emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly ></Rating>
        <p> {exactItem[0]?.description}</p>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default BlogDetails;