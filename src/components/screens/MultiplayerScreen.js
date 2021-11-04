import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im'

const MultiplayerScreen = ({history}) => {
  const [userInfo, setUserInfo] = useState({id: "", username: ""});

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

  return ( 
    <div className="multiplayer screen">
      <div className="multiplayer screen__container">
        <h1 className="multiplayer screen__title">Tela de Multijogador</h1>
        <div className="multiplayer screen__menus">
        </div>
      </div>
      <div onClick={() => history.goBack()}className="return-btn">
        <ImArrowLeft />
      </div>
    </div>
  )
}
 
export default MultiplayerScreen;