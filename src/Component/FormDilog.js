import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  constructor(props)
    {
        super(props);
        this.state = {
            trangThai : true,
            frole : this.props.user.quyen,
            check : 0,
            fname : this.props.user.username,
            fpass : this.props.user.sdt,
            id : "",
            open : true
           
        }
    }

  inputForm(){
      return(
        <div className="form-group">
        <label >Username</label>
        <input defaultValue={this.props.user.username} id="name"  onChange={(event) => this.isChange(event)} type="text" required className="form-control" name="fname"  aria-describedby="helpId" />
        <small id="helpId" className="form-text text-muted">Input usersname</small>
        <label >Number phone</label>
        <input defaultValue={this.props.user.sdt} id="sdt" onChange={(event) => this.isChange(event)} type="text" required className="form-control" name="fpass"  aria-describedby="helpId"  />
        <small id="helpId" className="form-text text-muted">Input password</small>
        <div className="form-group">
          <label >Role</label>
          <select defaultValue={this.props.user.quyen} onChange={(event) => this.isChange(event)} className="form-control" name="frole" >
            <option value={1}>Admin</option>
            <option value={2}>Member</option>
          </select>
        </div>
      </div>
    
      )
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
       console.log('1');
        this.setState({
          check :-1
        })
      }
      else{
        console.log('2');
        this.props.editUser(this.props.user.id,this.state.fname,this.state.fpass,this.state.frole);
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




  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
           
        
        <Dialog
          open={this.state.open}
          onClose={() => this.props.close()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
          <DialogContent>
            <DialogContentText>
             Sửa thông tin user khi sửa xong hãy ấn nút "Sửa" ở dưới để lưu user
            </DialogContentText>
            
          </DialogContent>
            {this.inputForm()}

          <DialogActions>
            <Button onClick={() => {this.props.close();this.chekEmpty()}} color="primary">
              Sửa
            </Button>
            <Button onClick={() => this.props.close()} color="primary">
              Thoát
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}