import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './nav.css';
import { useNavigate } from 'react-router-dom';
const Navigate = ({ titlebook }) => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="box-nav">
        <div className="back">
          <FaArrowCircleLeft  onClick={() => navigate('/')}/>
          <p>{titlebook}</p>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
