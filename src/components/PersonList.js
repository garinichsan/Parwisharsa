import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://localhost:8000/api/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
  }
  

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}