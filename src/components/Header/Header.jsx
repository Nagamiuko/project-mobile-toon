import React, { useContext, useState } from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import './Header.css';
import Logo from '../../assets/icon/Xenia-Seasons-Tweeting-Fall-book-follow-me.64.ico';
import Noavatar from '../../assets/user.png';
import Login from '../login/Login';
import { AuthContext } from '../../redux/actions/user';
import Logout from '../login/Logout';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [openLogin, setLogin] = useState(false);
  const [openLogout, setLogout] = useState(false);
  const { user } = useContext(AuthContext);
  const navigator = useNavigate()
  return (
    <>
      {openLogin && <Login setLogin={setLogin} />}
      {openLogout && <Logout setLogout={setLogout} />}
      <div className="header-title">
        <div className="box-1" onClick={()=> navigator('/')}>
          <div className="LogoImg">
            <img src={Logo} alt="" />
          </div>
           <p>Coffee</p>
        </div>
        <div className="Logo">
          <p>ComicBook MyFree</p>
        </div>
        {user === null ? (
          <div className="box-3">
            <button onClick={setLogin.bind(this, true)}>เข้าสู่ระบบ</button>
          </div>
        ) : (
          <div className="box-3" onClick={setLogout.bind(this, true)}>
            <div className="Profile">
              <img
                src={user?.avatar?.avatar_url || Noavatar}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <p>{user?.fullname}</p>
          </div>
        )}
        <div className="box-4">
          <div className="switcMode">
            <p>
              {' '}
              <ColorModeSwitcher justifySelf="flex-end" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
