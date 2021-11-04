import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im'

const PrepareScreen = ({ history }) => {
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
    <div className="prepare screen">
      <div className="prepare screen__container">
        <h1 className="prepare screen__title">Tela de Preparação</h1>
        <div className="prepare screen__menus">
          <Link to="/prepare/inventory" className="menu-btn">Inventorio</Link>
          <Link to="/prepare/craft" className="menu-btn">Criar Cartas</Link>
          <Link to="/prepare/decks" className="menu-btn">Editar Decks</Link>
        </div>
      </div>
      <div onClick={() => history.goBack()}className="return-btn">
        <ImArrowLeft />
      </div>
    </div>
  )
}
 
export default PrepareScreen;