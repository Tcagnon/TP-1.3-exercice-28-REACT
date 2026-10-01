

import { useState } from 'react';

function App() {
  const [couleur, setCouleur] = useState('black');

  function couleurAleatoire() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  return (
    <div>
      <p
        style={{ color: couleur, cursor: 'pointer', fontSize: '24px' }}
        onMouseEnter={() => setCouleur(couleurAleatoire())}
      >
        Survole-moi !
      </p>
    </div>
  );
}

export default App;