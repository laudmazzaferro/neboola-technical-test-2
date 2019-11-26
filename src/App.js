import React from 'react';
import Header from './Components/Header';
import Pics from './Components/Pics'
import './scss/App.scss';

class App extends  React.Component {
  constructor(props){
    super(props);
    this.state={
      pics:[]
    }
  }
  render(){
    return (
      <div className="App">
        <Header></Header>
        <main>
          <Pics></Pics>
        </main>

        hola mundo
      </div>
    )
  }
}

export default App;
