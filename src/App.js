
import React from 'react';
import CreateAccount from './Components/CreateAccount';
import DeleteAccount from './Components/DeleteAccount';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <CreateAccount />
        <DeleteAccount />
      </div>
    </div>
  );
}

export default App;

