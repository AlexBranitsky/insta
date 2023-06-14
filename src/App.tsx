import { Header } from './Components/Header/Header';
import './App.css';
import { Photos } from './Components/Photos/Photos';
import { Nav } from './Components/Navigation/Nav'
import { Route, Routes } from 'react-router-dom';
import { Data } from './Components/Profile/Profile';
import { Welcome } from './Components/Welcome/Welcome';
import { useState } from 'react';
import { User } from './models/photos';


function App() {
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState({} as User)

  /*
  fetch("/api/v1/photos", {
    method: "POST",
    body: JSON.stringify({ user_id: 1 })
  }).then(response => response.text()).then(response => console.log(response));

  */

  const authorizeCallback = (user: User) => {
    setUser(user)
    setUserId(user.ID);
  }

  return (
    <div className="App">
      {userId && (
        <>
          <Header user={user} />
          <Nav />
        </>
      )}
      <div className='hello'>
        <Routes>
          <Route path='/' element={<Welcome authorize={authorizeCallback} />}></Route></Routes></div>
      <div className='wrapper'>

        <Routes>
          <Route path='/content' element={<Photos url='/api/v1/photos' user_id={userId} />}></Route>
          <Route path='/profile' element={<Data user={user} updateUser={setUser} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;


// curl -i -X GET http://insta-test.mas3.co/api/v1/photos