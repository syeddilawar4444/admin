import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal,Input ,Space} from 'antd';
import { UserOutlined,EyeTwoTone,EyeInvisibleOutlined } from '@ant-design/icons';
import {signIn} from "../config/firebase"
// import { useNavigate } from "react-router-dom";


//import components
import { navigation } from "../data";
import { Link } from "react-scroll";

export default function Nav() {



const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [passwordVisible, setPasswordVisible] = React.useState(false);
  

  // const navigate = useNavigate();



const login = async function(){
  setModal1Open(false)
  if(!email && !password){
   return alert("empty form")
  }

await signIn(email,password)



}


  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
               
              className="text-white text-2xl hover:text-accent cursor-pointer"
              key={index}
            >
              <Link
                className="transition-all duration-300"
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li className="text-white text-2xl hover:text-accent cursor-pointer" onClick={() => setModal1Open(true)}>Login</li>
      </ul>

      
      <Modal
        title="LOGIN"
        className="h-5"
        style={{
          top: 350,
        }}
        open={modal1Open}
        onOk={login}
        onCancel={() => setModal1Open(false)}>
        <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="text-2xl mb-5" size="large" placeholder="Enter Email..." prefix={<UserOutlined />} />
        {/* <Space direction="vertical" /> */}

      {/* <Input.Password placeholder="input password" /> */}
      <Input.Password  value={password} onChange={(e)=>{setPassword(e.target.value)}}
      className="text-2xl" 
      size="large"
        placeholder="Enter Password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />

      </Modal>
    </nav>

        

  );
}
