import React, { Component } from 'react';

class TimKiem extends Component {
    constructor(props){
        super(props);
        this.state = {
            trangThai : true
        }
    }
    isChange(event){
        console.log(event.target.value);
        
        const giatri = event.target.value;
   
        this.setState({
          text : giatri
        })
       
       
       }
    getTuKhoa(){
        this.props.tuKhoa(this.state.text);
       
    }
    hienThiNut() {
        if(this.props.trangThai === false)
        {
            return <button type="button" onClick={() => this.props.thongBao()}  className="btn btn-outline-primary btn-lg btn-block" >Open</button>
        }
        else{
            return <button type="button" onClick={() => this.props.thongBao()} className="btn btn-outline-warning btn-lg btn-block" >Close</button>
        }
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                <input onChange={(event) => this.isChange(event)} name="tim" className="form-control mr-sm-2" type="text"  />
                <button onClick={ () => this.getTuKhoa()} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </form>
            </nav>
            {this.hienThiNut()}
           
            </div>
        );
    }
}

export default TimKiem;