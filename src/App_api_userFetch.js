import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [gitHubUser, setGitHubUser] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/reduxjs')
      .then(response => response.json())
      .then(data => {
        console.log("Dohvaćeni user:", data);

        // Ažuriranje gitHubUser objekta sa svim svojstvima
        setGitHubUser({
          avatar_url: data.avatar_url,
          name: data.name,
          location: data.location,
          bio: data.bio
        });
      })
      .catch(error => console.log(error.message));
  }, []); // Prazan niz ovisnosti

  return (
    <div className="App">
      <p>Parcijalni ispit za React</p>
      <div>
        <img src={gitHubUser.avatar_url} alt="GitHub Avatar" />
        <p>Name: {gitHubUser.name}</p>
        <p>Location: {gitHubUser.location}</p>
        <p>Bio: {gitHubUser.bio}</p>
      </div>
    </div>
  );
}

export default App;