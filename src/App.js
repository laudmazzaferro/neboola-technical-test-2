import React from 'react';
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
        hola mundo
      </div>
    )
  }
}

export default App;
