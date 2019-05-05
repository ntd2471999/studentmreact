import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');
class AddUser extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            trangThai : true,
            frole : 1,
            check : 0,
            fname : "",
            fpass : "",
            id : uuidv1()
           
        }
    }
    
    isChange(event){
      const name = event.target.name;
      var value =  "";
      if(name !== "frole"){
        value = event.target.value;
      }else
      {value = Number(event.target.value);}
      
        this.setState({
          [name] : value
        })
      
      
     
    }
    chekEmpty(){
     
      if(this.state.fname === "" || this.state.fpass === "" ){
       
        this.setState({
          check :-1
        })
      }
      else{
        this.props.addData(this.state.id,this.state.fname,this.state.fpass,this.state.frole);
        this.setState({
          fname : "",
          fpass : "",
        })
        this.setState({
          check :1,
         
        })
       
        
      }
    }
    getData(){
      if(this.state.check===1){
       
        console.log(this.state);
        return (
          <div className="alert alert-success" role="alert">
          {'Add user successful'}
         </div>
        );
      }
      else if(this.state.check === -1){
        return(
        <div className="alert alert-danger" role="alert">
         {'Username and number phone not empty'}
        </div>
        )
        
      }
      
    }

    thayDoiTrangThai() {
        this.setState({
            trangThai : !this.state.trangThai
        })
    }
    thayDoiForm = () => {
        if(this.props.trangThai === true)
        {
           
            return (
              <form>
              <div className="col-sm-12">
           
                <div>
                   
                    <div className="card addNewUser" >
              <div className="card-header">
                Add New User
              </div>
              <div className="card-body">
             
                <div className="form-group">
                  <label >Username</label>
                  <input id="name"  onChange={(event) => this.isChange(event)} type="text" required className="form-control" name="fname"  aria-describedby="helpId" />
                  <small id="helpId" className="form-text text-muted">Input usersname</small>
                  <label >Number phone</label>
                  <input id="sdt" onChange={(event) => this.isChange(event)} type="text" required className="form-control" name="fpass"  aria-describedby="helpId"  />
                  <small id="helpId" className="form-text text-muted">Input tel</small>
                  <div className="form-group">
                    <label >Role</label>
                    <select onChange={(event) => this.isChange(event)} className="form-control" name="frole" >
                      <option value={1}>Admin</option>
                      <option value={2}>Member</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                <button onClick={()=> this.chekEmpty()} type="reset" className="btn btn-success btn-lg btn-block">
                  <i className="fas fa-user-plus" /> Add User
                </button>
              </div>
            </div>
           
                </div>
                </div>
                </form>
            )

        }
        else {
            
            return (
                <div>
                    
               
            </div>
            )
        }
    }

    hienThiNut = () => {
       
        if(this.state.trangThai === true)
        {
           
            return (<button type="button" onClick={() => this. thayDoiTrangThai()} className="btn btn-outline-primary btn-lg btn-block" >Mở thêm mới User</button>)

        }
        else {
            
            return <button type="button" onClick={() => this. thayDoiTrangThai()} className="btn btn-outline-warning btn-lg btn-block" >Đóng thêm mới User</button>
        }
    }




    render() {
      
        return (
           <div>
             {this.getData()}
             {this.thayDoiForm()}
            </div>
            
          
        );
    }
}

export default AddUser;