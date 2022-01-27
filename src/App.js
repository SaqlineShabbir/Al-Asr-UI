
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BlogDetails from "./Components/Blogs/BlogDetails/BlogDetails";
import AddBlog from "./Components/DashBoard/AddBlog/AddBlog";
import Dashboard from "./Components/DashBoard/Dashboard";
import MakeAdmin from "./Components/DashBoard/MakeAdmin/MakeAdmin";
import ManageAllBlog from "./Components/DashBoard/ManageAllBlog/ManageAllBlog/ManageAllBlog";
import UpdateBlogs from "./Components/DashBoard/UpdateBlogs/UpdateBlogs";
import Login from "./Components/LoginSignup/LogIn/Login";
import Signup from "./Components/LoginSignup/SignUp/Signup";
import Home from "./Components/Main/Home/Home";
import AdminRoute from "./SecureRouts/AdminRoute/AdminRoute";
import PrivateRoute from "./SecureRouts/PrivateRoute/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/blogDetails/:blogId" element={<PrivateRoute><BlogDetails/></PrivateRoute>} />
      <Route path="/dashboard" element={<Dashboard/>}> 
      
          
          <Route  path={`/dashboard/makeAdmin`} element={<MakeAdmin/> }/>
            
          
          <Route  path={`/dashboard/manageAllBlog`} element={<ManageAllBlog/>}/>
            
          <Route  path={`/dashboard/updateBlog/:updateId`} element={<UpdateBlogs/>}/>
          
          <Route  path={`/dashboard/addBlog`} element={ <AddBlog/>}/>
            
          {/* <Route  path={`/dashboard/manageServices`} element={<AdminRoute><ManageServices/></AdminRoute>}/> */}
   
      </Route>
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
