import React, { useContext, useState } from 'react';
import './Log.css';
import {AiOutlineQuestionCircle } from 'react-icons/ai';
import {FaArrowCircleLeft } from 'react-icons/fa';

const Logout = ({ setLogout }) => {
  const handleLogout = async (e) => {
     localStorage.removeItem("user")
     window.location.reload(true)
  };

  return (
    <div>
      <div className="box-container">
        <div className="box-content">
          <div className="box-title-box">
            <div className="arrow-left" onClick={setLogout.bind(this, false)}>
              <FaArrowCircleLeft />
            </div>
            <div className="title-log">Menu</div>
            <div className="arrow-left">
              <AiOutlineQuestionCircle />
            </div>
          </div>
            <div className="text-input">
               <button>แก้ไขโปรไฟล์</button>
               <button>หนังสือที่ชอบ</button>
            </div>
            <div className="btn-login">
              <button onClick={handleLogout}>ออกจากระบบ</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
