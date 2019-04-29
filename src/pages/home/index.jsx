import React, {Component} from 'react';



class Home extends Component{
    state={
        userValue:'',
        passwordValue:'',
    }
    getUser=(e)=>{
        this.setState({
            userValue:e.target.value,
        })
    }
    getPassword=(e)=>{
        this.setState({
            passwordValue:e.target.value,
        })
    }
    handPost=()=>{
        const { userValue, passwordValue }=this.state;
        console.log(userValue)
        console.log(passwordValue)
    }
    render(){
        return(
          <div>
             <label>名字</label> <input placeholder='' onChange={this.getUser}/>
             <label>密码</label> <input placeholder='' onChange={this.getPassword}/>
             <button onClick={this.handPost}>提交</button>
          </div>
        );
    }
}
Home.propTypes={};
export default Home;