import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { values: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values').then((response) => {
      this.setState({
        values: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header as='h2' icon='users' content='Values' />
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
