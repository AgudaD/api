import React, { Component } from 'react';
import axios from "axios";


const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/'
  })
class UserList extends Component {

    state = {
        users: []
      }
      constructor(){
        super();
        api.get('/').then(res => {
          console.log(res.data)
          this.setState({ users: res.data })
        })
      }
    render() {
        return (
            <div>
                {this.state.users.map(users => <h6 key={users.id}>{users.name}</h6>)}
            </div>

        )
    }
}


export default UserList;