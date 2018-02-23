import React, { Component } from 'react';
import './App.css';
import News from './News';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchString :''
    }
   }
  onChange(event){
    const searchString = event.target.value;
    this.setState({ searchString });
   

  }
  render() {
     
    return (
      <div className="App">
        <input type="search" placeholder="Search in items" onChange ={this.onChange.bind(this)} />
      <News searchString = {this.state.searchString}/>

 
      </div>
    );
  }
}

export default App;
