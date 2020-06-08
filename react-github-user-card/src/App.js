import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state={
    };
  }
  componentDidMount(){
    axios
      .get('https://api.github.com/users/linzyk86')
      .then(response => {
         console.log(response.data);
         this.setState({
           login: response.data.login,
           avatar_url:response.data.avatar_url,
           name: response.data.name,
           location: response.data.location,
           following: response.data.following,
           followers: response.data.followers

           });
        })
      .catch(error => {
          console.error('Server Error', error);
        });
  }


  render() {
  return (
    <div className="App">
        <h1>GitHub User Card</h1>
      <div className = "user">
        <h3>{this.state.login}</h3>
        <img width = "200" src = {this.state.avatar_url}></img>
        <h4>{this.state.name}</h4>
        <h4>{this.state.location}</h4>
        <h4>Following: {this.state.following}</h4>
        <h4>Followers: {this.state.followers}</h4>

      </div>
    </div>
  );
}
}

export default App;

