import React, { Component } from 'react';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }

  

  
    render() {
        return (
            <div className="col">
        <table className="table table-hover">
          <thead>
            
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Username</th>
              <th scope="col">Phone</th>
              <th scope="col">Role</th>
              <th scope="col">Management</th>
            </tr>
          </thead>
          <tbody>
            {this.props.showData()}
         
           
          </tbody>
        </table>
      </div>
        );
    }
}

export default Table;