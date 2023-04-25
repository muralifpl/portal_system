import axios from "axios";
import { useEffect, useState } from "react";

import '../styles/landing_page.css'
import { createSearchParams, useNavigate } from "react-router-dom";




function App() {

const handleDetails=(check)=>{
    var id=check;

        
    navigate({
         
             
     pathname:'/Details',
       
          
     search: `?${createSearchParams({
                profile_id: id
              })}`
            })
    }
    
    
const navigate = useNavigate();


const[data,setData]=useState([]);



useEffect(()=>{
   
    axios({
       
        url: "https://panorbit.in/api/users.json",
    }).then((response)=>{
        
         setData(response.data.users)
         console.log(response.data)
    })
  
  


},[])
// console.log(data[0].id)

    return (
    <div className="landing_page">
    <div className="container">
<div className="d-flex align-items-center justify-content-center "  id="landing_center">
<div id="landing_content" className="position-relative">
<div id="header" className="">
    <div className="d-flex align-items-center justify-content-center">
    <div className="py-2 mt-4">
    Select an account
    </div>
   </div>
</div>
<div className="py-3" id="contents">
    <div className="container px-5">
       {
    data.map((test,index)=>{
        return<div style={{cursor:"pointer"}} onClick={()=>{handleDetails(index)}}>
          <span>  <img src={test.profilepicture} className="rounded-circle" width={30} alt=""/></span>
          <span className="mx-3" style={{fontSize:"1rem",fontWeight:"500",color:"grey"}}>{test.name}</span>
          <hr />
        </div>
    })
}
    </div>


</div>
<div id="footer" className="position-absolute bottom-0">

</div>
</div>
</div>

    </div>
    </div>  );
}

export default App;