import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Home extends Component {
    state ={
        username:''
    }
    inputChange= (e) =>{
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    render() {
        const {username} =this.state
        return (
            <div>
                <label>name</label><input type="text" placeholder="请输入" onChange={(e)=>this.inputChange(e)}/>
                <span>{username}</span>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
