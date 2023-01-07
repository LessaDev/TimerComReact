import React from 'react';
import {Form} from "./components/form/Form";
import Lista from "./components/lista/lista";

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Lista/>
          <Form/>
      </header>
    </div>
  );
}

export default App;
