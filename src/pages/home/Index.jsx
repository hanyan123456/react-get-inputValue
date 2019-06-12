import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Home extends Component {
    state = {
        username: '',
        toggleShow: true
    }
    inputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            username: e.target.value
        })
    }
    toggleData = () => {
        this.setState({ toggleShow: !this.state.toggleShow });
    }
    render() {
        const { username, toggleShow } = this.state
        return (
            <div>
                <label>name</label><input type="text" placeholder="请输入" onChange={(e) => this.inputChange(e)} />
                {toggleShow && <span>{username} </span>}
                <button onClick={this.toggleData}>submit</button>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
