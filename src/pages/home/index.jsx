import React, {Component} from 'react';
import Child from './component/child'


class Home extends Component{
    state={
        userValue:'',
        passwordValue:'',
        ChildValue:''
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
    handleVal =(e)=>{
        this.setState({
             ChildValue: e.target.value
             });
    }
    render(){
        const { ChildValue }= this.state
        console.log(ChildValue)
        return(
          <div>
             <label>名字</label> <input placeholder='' onChange={this.getUser}/>
             <label>密码</label> <input placeholder='' onChange={this.getPassword}/>
             <button onClick={this.handPost}>提交</button>
             <span>show childComponent Value</span>
             <br/>
             <br/>
                <span>接受子组件值{ChildValue}</span>
                <Child handleVal={this.handleVal}></Child>
          </div>
        );
    }
}
Home.propTypes={};
export default Home;