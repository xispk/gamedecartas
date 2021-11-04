import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im'

const DecksScreen = ({history}) => {
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
      const url = `https://gamedecartasapi.herokuapp.com//api/v1/users`;

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
    <div className="decks screen">
      <div className="decks screen__container">
        <h1 className="decks screen__title">Editar Decks</h1>
        <div className="decks screen__menus">
        </div>
      </div>
      <div onClick={() => history.goBack()}className="return-btn">
        <ImArrowLeft />
      </div>
    </div>
  )
}
 
export default DecksScreen;