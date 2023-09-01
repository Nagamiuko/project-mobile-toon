import React, { useContext, useState } from 'react';
import './Log.css';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {FaArrowCircleLeft} from 'react-icons/fa'
import { server } from '../../serverAPI';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../redux/actions/user';
const SignUp = () => {
  const navigate = useNavigate();
  const { dispatch, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    const Data = {
      email: email,
      fullname: name,
      username: username,
      password: password,
    };
    try {
          await axios.post(`${server}/api/auth/register`, Data);
          toast.success("สมัครสมาชิกสำเร็จ")
          navigate("/");
        } catch (err) {
          toast.error('ชื่อผู้ใช้ หรือ อีเมล มีผู้ใช้แล้ว');
          console.log(err);
        }
  };

  return (
    <div>
      <div className="box-container">
        <div className="box-content">
          <div className="box-title-box">
            <div className="arrow-left"
               onClick={
                ()=> navigate('/')}>
              <FaArrowCircleLeft />
            </div>
            <div className="title-log">สมัครสมาชิก</div>
            <div className="arrow-right" title='ต้องการให้เราช่วยเหลืออะไร'>
              <AiOutlineQuestionCircle />
            </div>
          </div>
          <div className="text-input">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">ชื่อโปรไฟล์</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="ชื่อโปรไฟล์"
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor="">อีเมล</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="อีเมล"
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="">ชื่อผู้ใช้</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="ชื่อผู้ใช้"
                onChange={e => setUsername(e.target.value)}
              />
              <label htmlFor="">รหัสผ่าน</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="รหัสผ่าน"
                onChange={e => setPassword(e.target.value)}
              />
              <div className="btn-login">
                <button type="submit">ลงทะเบียน</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
