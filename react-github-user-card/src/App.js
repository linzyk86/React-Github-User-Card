import React from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components'



const H1 = styled.h1`
  font: 'Roboto';
`
const H2 = styled.h2`
  font: 'Roboto';
`
const H4 = styled.h4`
  font: 'Roboto';
  color: slategrey;
`
const Img = styled.img`
  border-radius: 10px;`


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
        <H1>GitHub User Card</H1>
      <div className = "user">
        <H2>{this.state.login}</H2>
        <Img width = "200" src = {this.state.avatar_url}></Img>
        <H4>{this.state.name}</H4>
        <H4>{this.state.location}</H4>
        <H4>Following: {this.state.following}</H4>
        <H4>Followers: {this.state.followers}</H4>

      </div>
    </div>
  );
}
}

export default App;

