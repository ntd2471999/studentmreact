import React , { Component } from 'react';
import Header from './Component/Header'
import Table from './Component/Table'
import TimKiem from "./Component/TimKiem"
import AddUser from './Component/AddUser'
import Data from './Data/data.json'
import FormDialog from './Component/FormDilog'




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      trangThai : false,
      dataUser : [],
      tuKhoa : "",
      open : false,
      
      
    }
  }
  componentWillMount() {
    if(localStorage.getItem("dataUser") === null){
      localStorage.setItem("dataUser",JSON.stringify(Data));
    }
    else{
      var items = JSON.parse(localStorage.getItem("dataUser"));
      this.setState({
        dataUser : items
      });
    }
  }
  editUser = (user) => {
    this.setState({
      userEdit : user
    })
    
  }

  editUser2 = (id,name,sdt,quyen) => {
    console.log('Sửa')
    var items = this.state.dataUser;
    for(var i=0;i<items.length;i++)
    {
      if(id === items[i].id)
      {
        items[i].username = name;
        items[i].sdt = sdt;
        items[i].quyen = quyen;
      }
    }
    this.setState({
      dataUser : items,
    })
    localStorage.setItem("dataUser",JSON.stringify(items));
  }

  showEditForm = (user) => {
    if(this.state.open === true){
      console.log(this.state.userEdit);
      return <FormDialog editUser={(id,name,sdt,quyen) => this.editUser2(id,name,sdt,quyen)} user={this.state.userEdit} close={() => this.handleClose()}></FormDialog>
    }
    else return '';
  }

  deleteUser = (id) => {
   
    
    var items = this.state.dataUser;
    for(var i =0 ;i< items.length;i++){
      if(id === items[i].id){
        console.log('delete');
        items.splice(i,1);
      }
    }
    this.setState({
      dataUser : items
    });
    localStorage.setItem("dataUser",JSON.stringify(items));
  }

  handleClickOpen = () => {
    console.log('123');
    this.setState({ open: true });
  };

  handleClose = () => {
    console.log('123 456');
    this.setState({ open: false });
  };

  addData(id,name,phone, role){
      var item = {};
      item.id = id;
      item.username = name;
      item.sdt = phone;
      item.quyen = role;
      var items = this.state.dataUser;
      items.push(item);
      this.setState({
        dataUser :  items
      })
     
      localStorage.setItem("dataUser",JSON.stringify(items));
  }

  thayDoiTrangThai() {
    this.setState({
      trangThai : !this.state.trangThai
    })
  }

  getTuKhoa(tuKhoa2){
    
    this.setState({
      tuKhoa : tuKhoa2
    });
    console.log(this.state.tuKhoa);
  }

  showUser = () => {
    if(this.state.tuKhoa === ""){
    return(
    this.state.dataUser.map((value,key) => {
     
        return (
          (

            <tr>
                  <th scope="row">{key+1}</th>
                  <td>{value.username}</td>
                  <td>{value.sdt}</td>
                  <td>{this.quyenUser(value.quyen)}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label>
                    <button  onClick={() => {this.editUser(value);this.handleClickOpen()}} type="button" className="btn btn-primary"  ><i className="far fa-edit" /> Edit</button>
                   
                      <button onClick={() => this.deleteUser(value.id)}  type="button" className="btn btn-danger"><i className="fas fa-trash-alt" /> Delete</button>
                    </div>
                  </td>

                  {/* The Modal */}
                
                  
                </tr>
          )
        )
      }
     
     
    )
    )
  }
  else
  {
    return(
      this.state.dataUser.map((value,key) => {
        if((value.username.indexOf(this.state.tuKhoa)) != -1){
          return (
            (
        
              <tr>
                    <th scope="row">{value.id}</th>
                    <td>{value.username}</td>
                    <td>{value.sdt}</td>
                    <td>{this.quyenUser(value.quyen)}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label>
                        <button type="button" className="btn btn-primary"><i className="far fa-edit" /> Edit</button>
                        <button type="button" className="btn btn-danger"><i className="fas fa-trash-alt" /> Delete</button>
                      </div>
                    </td>

                   
              </tr>
            )
          )
        }
       
      }
      )
      )
  }
    
  }

  quyenUser(id){
    console.log('hello');
    switch(id){
      case 1 : return "Admin"; break;
      case 2 : return "Member"; break;
    }
  }


  render() {
    
      return (
        <div className="App">
            {this.showEditForm()}
            <Header></Header>
            <div className="container mains">
              <div className="row">
                  <div className="col-sm-12">
                    <TimKiem tuKhoa={(tuKhoa) => this.getTuKhoa(tuKhoa)} trangThai={this.state.trangThai} thongBao={() => this.thayDoiTrangThai()}></TimKiem>
                  </div>
              </div>
            </div>
            <div className="container mains2">
              <div className="row">
                  <Table editUser={() => this.editUser()} showData={() => this.showUser()} Data={this.state.dataUser}></Table>
                  <AddUser addData={(id,name,phone,role) => this.addData(id,name,phone,role)} trangThai={this.state.trangThai} thongBao={() => this.thayDoiTrangThai()}></AddUser>
              </div>
            </div>
        </div>
      );
    
  }
}

export default App;

