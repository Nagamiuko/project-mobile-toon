import React, { useContext, useState } from 'react';
import './Log.css';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {FaArrowCircleLeft} from 'react-icons/fa'
import { server } from '../../serverAPI';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../redux/actions/user';
const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  const { dispatch, loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START', loading });
    try {
      await axios
        .post(`${server}/api/auth/login`, {
          username,
          password,
        })
        .then(res => {
          dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
          setLogin(false)
          toast.success('Login Success!');
          navigate('/');
        });
    } catch (err) {
      toast.error('Login Fails');
      console.log(err);
    }
  };
  const handleSignup = () => {
      navigate('/signup')
  }
  return (
    <div>
      <div className="box-container">
        <div className="box-content">
          <div className="box-title-box">
            <div className="arrow-left"
              onClick={setLogin.bind(this,false)}
            >
              <FaArrowCircleLeft />
            </div>
            <div className="title-log">เข้าสู่ระบบ</div>
            <div className="arrow-right" title='ต้องการให้เราช่วยเหลืออะไร'>
              <AiOutlineQuestionCircle />
            </div>
          </div>
          <div className="text-input">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">ชื่อผู้ใช้</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
              <label htmlFor="">รหัสผ่าน</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
              <div className="btn-login">
                <button type="submit">เข้าสู่ระบบ</button>
              </div>
            </form>
                <p onClick={() => handleSignup()}>สมัครสมาชิก</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
