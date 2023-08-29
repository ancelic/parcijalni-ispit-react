import React from 'react';
import './css/RepositoryList.css'; // Importirajte CSS datoteku

function RepositoryList({ repositories }) {
  return (
    <div className="repo-list-container">
      <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Repositories:</h2>
      <ul className="repo-list">
        {repositories.map(repo => (
          <li className="repo-list-item" key={repo.id}>
            <span className="repo-name">{repo.name}</span>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;