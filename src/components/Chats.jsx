import { useEffect, useState } from "react";

import '../styles/Chats.css'
import axios from "axios";
import { RiArrowDropDownLine } from 'react-icons/ri'

import { RiArrowDropUpLine } from 'react-icons/ri'

import { BsChatRight } from 'react-icons/bs'


function App() {
  const[check,setCheck]=useState(true);


  const[list,setList]=useState([]);


  const[history,setHistory]=useState(0);

const[img,setImg]=useState("");
const[name,setName]=useState("");


  const handleHistory=(test,image,name)=>{
    setHistory(test)
    setImg(image)
    setName(name)
  }

  const handleChat=(test)=>{
    setCheck(test)
    setHistory(0)
  
  }
  useEffect(() => {
    axios({
        url: "https://panorbit.in/api/users.json",
    }).then((response) => {
        setList(response.data.users)

        
    })



}, [])

    
    return ( <>
    
    <div className="">

 <div>




    {
      check===true?
      
      <div onClick={()=>{handleChat(false)}}>
      <div id="chats_start">
       <div className="container">
        <span className="">
        <BsChatRight />
        </span>
        <span className="mx-2">
          Chats
        </span>
        <span className="float-end">
          <RiArrowDropUpLine fontSize={"1.8rem"}/>
        </span>
       </div>
      </div>
      </div>
      
      
      :

      <div >
      <div id="chats_up" >
        <div className="head_chat" onClick={()=>{handleChat(true)}}>
        <div className="container">
        <span className="">
         <BsChatRight />
        </span>
        <span className="mx-2">
          Chats
        </span>
        <span className="float-end" >
         <RiArrowDropDownLine style={{fontSize:"1.8rem"}}/>
        </span>

        </div>
</div>
<div className="  chat_list">

<div className="container ">
{
  list.map((items)=>{
return<div className="my-2" onClick={()=>{handleHistory(1,items.profilepicture,items.name)}}>

    <span className="">
         <img className="rounded-circle" src={items.profilepicture} width={25} alt="" />
        </span>
        <span className="mx-2" style={{fontSize:"0.9rem",color:"black"}}>
          {items.name}
        </span>
        <span className="float-end">
        o
        </span>


</div>
  })
}
</div>
  </div>



        </div>

      </div>
      
    }



 </div>




{
 history===1?
 
<div >
      <div id="chats_history" >
        <div className="head_chat">
        <div className="container">
        <span className="">
         <img className="rounded-circle" src={img} width={25} alt="" />
        </span>
        <span className="mx-1" style={{fontSize:"0.8rem"}}>
         {name}
        </span>
        <span className="float-end">
        <RiArrowDropDownLine style={{fontSize:"1.8rem"}}/>
x
        </span>

        </div>
</div>


<div className="chat_2_chat">
  <div className="container my-3">
  <div>
    <div className="user_chat">
      Hi Buddy!
    </div>
    <div className="text-center" style={{fontSize:"0.7rem"}}>
      9:00pm
    </div>
    <div className="user_chat my-2 float-end">
      Hi Buddy!
    </div>
   
  
  </div>
  

  </div>

  </div>
  <div className="">
  <input type="text"  />
  </div>


  </div>

      </div>
:""

}





 

   


  </div>

    </> );
}

export default App;