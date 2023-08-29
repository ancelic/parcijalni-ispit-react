import React, { useState } from 'react';
import './css/UserInputForm.css'; // Importirajte CSS datoteku koristeći relativnu putanju

function UserInputForm({ usernameInput, handleUsernameChange, handleFormSubmit }) {
  const [isEmptyError, setIsEmptyError] = useState(false); // Dodajte state za praćenje greške praznog unosa

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usernameInput.trim() === '') {
      setIsEmptyError(true); // Postavite grešku praznog unosa ako je unos prazan
    } else {
      setIsEmptyError(false); // Resetirajte grešku ako je unos validan
      handleFormSubmit(event); // Pozovite originalnu funkciju za obradu obrasca
    }
  };

  return (
    <form className="user-input-form" onSubmit={handleSubmit}>
    <label htmlFor="usernameInput" className="user-input">GitHub username:</label>
      <input
        id="usernameInput"
        className={`user-input ${isEmptyError ? 'input-error' : ''}`} // Dodajte klasu input-error ako je prazan unos
        type="text"
        value={usernameInput}
        onChange={handleUsernameChange}
        placeholder="Unesite GitHub korisničko ime e.g. : facebook"
      />
      <button className="submit-button" type="submit">GO!</button>
      {isEmptyError && <p className="error-message">Unesite korisničko ime</p>}
    </form>
  );
}

export default UserInputForm;