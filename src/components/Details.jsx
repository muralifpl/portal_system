import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import '../styles/Details.css'
import { RiArrowDropRightLine } from 'react-icons/ri'

import Chats from '../components/Chats'



function App() {

    let [searchParams] = useSearchParams();


    const[changeProfile,setChangeProfile]=useState("");


    const id = changeProfile?changeProfile:searchParams.get("profile_id");


     const handleProfileChange=(test)=>{
            setChangeProfile(test)
     }

    

    const [detail, setDetails] = useState("");
    const [company, setCompany] = useState("");
    const [address, setAddress] = useState("");
    const[list,setList]=useState([]);
     const[active,setActive]=useState("")



    const [geo,setGeo]=useState("");


     const handleCheckout=()=>{

      navigate('/')

     }

     const navigate = useNavigate();

    useEffect(() => {
        axios({
            url: "https://panorbit.in/api/users.json",
        }).then((response) => {
            setList(response.data.users)

            setDetails(response.data.users[id])
            setCompany(response.data.users[id].company)
            setAddress(response.data.users[id].address)
            setGeo("http://maps.google.com/maps?q="+response.data.users[id].address.geo.lat+","+response.data.users[id].address.geo.lng+"&z=16&output=embed")
        })
    


    }, [id])

   

    const [position, setPosition] = useState("230");

    const [page, setPage] = useState("Profile")



    const handleProfile = (check_1, check_2) => {
        setPosition(check_2)
        setPage(check_1)
       

    }


    return (<div className="" >

        <div className="" id="profile_details_main">
            <div className="row">
                {/* side_bar */}

                <div className="col-2">


                    <div className="" id="side_bar">
                        
                        <div id="white_curve" style={{ marginTop: position + "px" }}>
                            <div className="ps-1" >
                                <RiArrowDropRightLine style={{ fontSize: "1.8rem" }} />
                            </div>
                        </div>
                        <div className="side_content text-white">
                            <div className="" style={{ marginTop: "205px" }}>
                                <div>
                                    <div className="my-3" style={{cursor:"pointer",color:page==="Profile"?"white":""}} onClick={() => { handleProfile("Profile", 230) }}>
                                        Profile

                                    </div>
                                    <div id="under_line" className="">

                                    </div>
                                </div>

                                <div>
                                    <div className="my-3" style={{cursor:"pointer",color:page==="Posts"?"white":""}} onClick={() => { handleProfile("Posts", 290) }}>
                                        Posts

                                    </div>
                                    <div id="under_line"  className="">

                                    </div>
                                </div>
                                <div>
                                    <div className="my-3" style={{cursor:"pointer",color:page==="Gallery"?"white":""}} onClick={() => { handleProfile("Gallery", 345) }}>
                                        Gallery

                                    </div>
                                    <div id="under_line" className="">

                                    </div>
                                </div>
                                <div>
                                    <div className="my-3" style={{cursor:"pointer",color:page==="ToDo"?"white":""}} onClick={() => { handleProfile("ToDo", 405) }}>
                                        ToDo

                                    </div>
                                   
                                </div>



                            </div>
                        </div>

                    </div>

                </div>


                {/* profile_data */}

                <div className="col-10">
                    <div className="my-3">
                        <div className="mx-5 ps-4">

                            <span className="dark" >
                                {page}

                            </span>
                            <div className="float-end" >
                                <div data-bs-toggle="dropdown" style={{cursor:"pointer"}} className="">
                                <img className="rounded-circle"    width={30} src={detail.profilepicture} alt=""></img>
                                <span className="mx-2 mt-2 dark" style={{ fontSize: "1rem" }}>
                                    {detail.name}
                                </span>
                                </div>
                               
                                <div className="dropdown-menu container p-4" id="dropdown-menu" style={{fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>
                                <div className="d-flex mx-auto justify-content-center">
                                <img className="rounded-circle mt-2" src={detail.profilepicture} width={80} alt=""/>
                                
                                </div>
                                <div className="text-center" >
                                    <div className="mt-2" style={{fontSize:"1rem",color:"black",fontWeight:"600"}}>
                                    {detail.name}
                                    </div>
                                    <div className="mt-1" style={{color:"#b3adad"}}>
                                    {detail.email}
                                    </div>
                                   
 
                                {
                                 list.slice(detail.id===10?0:detail.id,
                                    
                                    
                                   detail.id===10?2:detail.id+2).map((test,index)=>{

                                    return<div style={{fontSize:"0.9rem"}}>
                                         <div className="" >
                                     <hr />
                                     </div>

                                       <div style={{cursor:"pointer"}} onClick={()=>{handleProfileChange(test.id-1)}}>
                                        <img src={test.profilepicture} className="rounded-circle mx-2" width={27} alt="" ></img>
                                       {test.name}
                                       </div>
                                      
                                    </div>
                                 })
                                }
<div className="mt-3" style={{fontSize:"1.05rem",fontWeight:900}}>
   <button id="sign_out" onClick={()=>{handleCheckout()}}>
    Sign Out
   </button>
</div>

                                 </div>

                            </div>
                            </div>
    
                            <div className="my-4">
                                <hr />

                            </div>

                            {


                                page !== "Profile" ?

                                    <div id="coming_soon" >
                                        <div className="h-100 d-flex align-items-center justify-content-center">
                                            Coming Soon

                                        </div>
                                    </div>


                                    :

                                    <div className="">
                                        <div className="row py-2">
                                            <div className="col-4">
                                                <div className="mx-auto d-flex justify-content-center align-items-center">


                                                    <img className="rounded-circle" width="190px" src={detail.profilepicture} alt=""></img>
                                                </div>


                                                <div className="text-center dark my-1" id="" >
                                                    {detail.name}

                                                </div>




                                                {/* profile_details */}


                                                <div className="my-2" id="profile_details" >
                                                    <div className="row mt-1">
                                                        <div className="col-4">
                                                            <div className="float-end light" >
                                                                Username
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-7" >
                                                            <div className="dark" style={{ marginLeft: "-10px" }}>
                                                                {detail.username}
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-4">
                                                            <div className="float-end light" >
                                                                e-mail
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-7" >
                                                            <div className="dark" style={{ marginLeft: "-10px" }}>
                                                                {detail.email}
                                                            </div>


                                                        </div>
                                                    </div>

                                                    <div className="row mt-2 ">
                                                        <div className="col-4">
                                                            <div className="float-end light" >
                                                                Phone
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-7" >
                                                            <div className="dark" style={{ marginLeft: "-10px" }}>
                                                                {detail.phone}
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 ">
                                                        <div className="col-4">
                                                            <div className="float-end light" >
                                                                Website
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-7" >
                                                            <div className="dark" style={{ marginLeft: "-10px" }}>
                                                                {detail.website}
                                                            </div>


                                                        </div>
                                                    </div>


                                                </div>




                                                <hr />
                                                <div className="text-center my-1 light" >
                                                    Company

                                                </div>
                                                {/* company_details */}

                                                <div className="my-2" id="profile_details" >
                                                    <div className="row mt-1">
                                                        <div className="col-4">
                                                            <div className="float-end light" >
                                                                Name
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-7" >
                                                            <div className="dark" style={{ marginLeft: "-10px" }}>
                                                                {company.name}
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-4">
                                                            <div className="float-end light" >
                                                                catchPhrase
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-7" >
                                                            <div className="dark" style={{ marginLeft: "-10px" }}>
                                                                {company.catchPhrase}
                                                            </div>


                                                        </div>
                                                    </div>

                                                    <div className="row mt-2 ">
                                                        <div className="col-4">
                                                            <div className="float-end light" >
                                                                bs
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-7" >
                                                            <div className="dark" style={{ marginLeft: "-10px" }}>
                                                                {company.bs}
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>




                                            </div>

                                            <div className="col-1" >
                                                <div className="d-flex mx-auto justify-content-center" id="vertical_bar">

                                                </div>
                                            </div>

                                            {/* address_details */}


                                            <div className="col-7 light" >
                                                <div>
                                                    Address:
                                                </div>
                                                <div className="mx-3">
                                                    <div className="row mt-2">
                                                        <div className="col-2">
                                                            <div className="float-end light" >
                                                                Street
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-6" >
                                                            <div className="dark" style={{ marginLeft: "-27px" }}>
                                                                {address.street}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-2">
                                                            <div className="float-end light" >
                                                                Suite
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-6" >
                                                            <div className="dark" style={{ marginLeft: "-27px" }}>
                                                                {address.suite}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-2">
                                                        <div className="col-2">
                                                            <div className="float-end light" >
                                                                City
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-6" >
                                                            <div className="dark" style={{ marginLeft: "-27px" }}>
                                                                {address.city}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-2">
                                                            <div className="float-end light" >
                                                                Zipcode
                                                            </div>

                                                        </div>
                                                        <div className="col-1">
                                                            :
                                                        </div>
                                                        <div className="col-6" >
                                                            <div className="dark" style={{ marginLeft: "-27px" }}>
                                                                {address.zipcode}
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div>

                                                    </div>

                                                </div>

                                                <div id="" className="mt-2 ps-4">

                                                    <iframe
                                                        id="gmap_details"
                                                        src={geo}
                                                        frameborder="0"
                                                        scrolling="no"
                                                        marginheight="0"
                                                        marginwidth="0"

                                                    ></iframe>


                                                </div>
         <div>

      <div>
        <Chats />
      </div>
</div>
 

                                            </div>
                                        </div>
                                    </div>

                            }



                        </div>

                    </div>

                </div>
            </div>
        </div>




    </div>);
}

export default App;