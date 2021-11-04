import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Icons
import { ImUser } from 'react-icons/im';
import { BsGearFill } from 'react-icons/bs';
import { GiExitDoor } from 'react-icons/gi';
import { RiMailFill, RiMailAddFill } from 'react-icons/ri';
import { MdLiveHelp } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';

// Components
import MailModal from '../MailModal';
import HelpModal from '../HelpModal';
import ConfigModal from '../ConfigModal';
import FriendsModal from '../FriendsModal';

const HomeScreen = ({ history }) => {
  const [ mailModal, setMailModal ] = useState(false);
  const [ helpModal, setHelpModal ] = useState(false);
  const [ configModal, setConfigModal ] = useState(false);
  const [ friendsModal, setFriendsModal ] = useState(false);
  
  const [ userInfo, setUserInfo ] = useState({
    id: "userId", 
    username: "username"});

  useEffect(() => {
    if(!localStorage.getItem("authToken")){
      history.push('/auth');
    }

    const fetchUserInfo = async() => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
      }

      // const url = `http://localhost:3001/api/v1/users`;
      const url = `https://gamedecartasapi.herokuapp.com/api/v1/users`;

      try {
        const { data } = await axios.get(url, config);
        
        const user = {id: data.data._id, username: data.data.username};
        setUserInfo(user);
      } catch (error) {
        return;
      }
    };

    fetchUserInfo();

  }, [history]);


  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/auth");
  };

  const handleModals = (active) => {
    
    setConfigModal(false);
    setMailModal(false);
    setHelpModal(false);
    setFriendsModal(false);
    
    if(active === "config"){
      setConfigModal(!configModal);
    }
    if(active === "mail"){
      setMailModal(!mailModal);
    }
    if(active === "help"){
      setHelpModal(!helpModal);
    }
    if(active === "friends"){
      setFriendsModal(!friendsModal);
    }

  };

  return ( 
    <div className="home screen">
      <div className="home screen__container">
        <h1 className="home screen__title">Jogo de Cartas</h1>
        <div className="sidebar">
          <div className="user-perfil">
            <div className="user-img">
              <ImUser />
            </div>
            <div className="user-info">
              <div className="user-info__id">
                <span className="user-info__title">ID:</span>
                <span className="user-info__text">{userInfo.id}</span>
              </div>
              <div className="user-info__username">
                <span className="user-info__title">Nickname:</span>
                <span className="user-info__text">{userInfo.username}</span>
              </div>
            </div>
          </div>
          
          <div className="icons">
            <div className="icon disconnect" onClick={logoutHandler}>
              <GiExitDoor />
            </div>
            <div 
              onClick={() => handleModals("config")} 
              className={configModal ? "icon config active" : "icon config"}>
              <BsGearFill />
            </div>
            <div 
              onClick={() => handleModals("mail")} 
              className={mailModal ? "icon mail active" : "icon mail"}>
              <RiMailFill />
            </div>
            <div 
              onClick={() => handleModals("help")} 
              className={helpModal ? "icon help active" : "icon help"}>
              <MdLiveHelp />
            </div>
          </div>
        </div>
        <div className="home screen__menus">
          <Link to="/campaign" className="menu-btn">Campanha</Link>
          <Link to="/multiplayer" className="menu-btn">Multijogador</Link>
          <Link to="/prepare" className="menu-btn">Preparação</Link>
          <Link to="/store" className="menu-btn">Loja</Link>
          
          
        </div>
        <div 
          onClick={() => handleModals("friends")} 
          className={friendsModal ? "friends active" : "friends"}>
            <FaUserFriends />
        </div>
        { mailModal && <MailModal /> }
        { configModal && <ConfigModal /> }
        { helpModal && <HelpModal /> }
        { friendsModal && <FriendsModal /> }
      </div>
    </div>
  )
}
 
export default HomeScreen;