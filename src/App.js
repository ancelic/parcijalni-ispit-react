import React, { useState} from 'react';
import './App.css';
import RepositoryList from './components/RepositoryList';
import UserInfo from './components/UserInfo';
import UserInputForm from './components/UserInputForm';



function App() {
  const [gitHubUser, setGitHubUser] = useState({});
  const [usernameInput, setUsernameInput] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);  // State za pracenje greske


  const handleUsernameChange = (event) => {
    setUsernameInput(event.target.value);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setError(null); //  Restartiranje greske na null prije slanja zahtjeva

    fetch(`https://api.github.com/users/${usernameInput}`)
      .then(response => response.json())
      .then(data => {
        console.log("Dohvaćeni user:", data);

        setGitHubUser({
          avatar_url: data.avatar_url,
          name: data.name,
          location: data.location,
          bio: data.bio
        });
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message); // Postavite poruku greške u state
      });

    fetch(`https://api.github.com/users/${usernameInput}/repos`)
      .then(response => response.json())
      .then(data => {
        console.log("Dohvaćeni repozitoriji:", data);
        setRepositories(data);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message); // Postavite poruku greške u state
      });
  };

  return (
    <div className="App">
      <h1>Parcijalni ispit za React</h1>
      <div style={{ border: '1px solid black', width: '55%' , marginLeft: '20%'}}>  
      <UserInputForm
        usernameInput={usernameInput}
        handleUsernameChange={handleUsernameChange}
        handleFormSubmit={handleFormSubmit}
      />
      </div>
     <div style={{ border: '1px solid black', width: '55%' , marginLeft: '20%'}}>   
      {Object.keys(gitHubUser).length > 0 && <UserInfo gitHubUser={gitHubUser} />} {/* Prikaži samo ako objekt gitHubUser nije prazan */}
      {repositories.length > 0 && <RepositoryList repositories={repositories} />} {/* Prikaži samo ako lista nije prazna */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Prikaži poruku greške u crvenoj boji ako postoji greška */}
      <button className="reset-button" style={{backgroundColor: 'black', color: 'white', marginLeft: '5%', marginRight: '5%' }} onClick={refreshPage}>Reset</button>
      </div>  
    </div>
  );
}

export default App;