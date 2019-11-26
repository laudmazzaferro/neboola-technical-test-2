import React from 'react';
import { fetchPics } from './services/fetchPics'
import Header from './Components/Header';
import Pics from './Components/Pics'
import './scss/App.scss';

class App extends  React.Component {
  constructor(props){
    super(props);
    this.state={
      pics:[],
      nRandom:''
    }
    this.getPics = this.getPics.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }
  componentDidMount(){
    this.getRandom()
  }
  getRandom(){
    const newNRandom=  Math.random() * (31 - 10) + 10;
    this.setState({
      nRandom:newNRandom
    },()=>{this.getPics()})
  }

  getPics(){
    const ENDPOINT =`https://picsum.photos/v2/list?page=${parseInt(this.state.nRandom)}&limit=10`;
    console.log(ENDPOINT)
    fetchPics(ENDPOINT)
    .then(data=>{
      this.setState({
        pics:data
      },()=>{console.log(this.state.pics)})
    })
  }
  
  render(){
    const {pics}=this.state;
    return (
      <div className="App">
        <Header></Header>
        <main>
          <Pics pics={pics}></Pics>
        </main>
      </div>
    )
  }
}

export default App;
