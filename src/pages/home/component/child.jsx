import React,{Component} from 'react';

 class child extends Component{
    render(){
        return(
            <div>
                child component
                <input htmlype="text" placeholder="请输入父亲的名字." onChange={this.props.handleVal} />
            </div>
        )
    }
 };
 export default child;