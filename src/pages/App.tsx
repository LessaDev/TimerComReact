import React from 'react';
import {Form} from "../components/form/Form";
import Lista from "../components/lista/Lista";
import style from "./style.module.scss"

function App() {
  return (
    <div className="App">
      <header className={style.AppStyle}>
         <Lista/>
          <Form/>
      </header>
    </div>
  );
}

export default App;
