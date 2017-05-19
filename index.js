import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component{
	constructor(props){
		super(props);
		this.state={data:0}
		console.log(this.props);
	}
	componentWillMount(){
		console.log("componentWillMount");
	}
	componentDidMount(){
		console.log("componentDidMount");
	}
	shouldComponentUpdate(){
		console.log("shouldComponentUpdate")
		return true;
	}
	componentWillReceiveProps(){
		console.log("componentWillRecieveProps");
	}
	componentWillUpdate(){
		console.log("componentWillUpdate");
	}
	componentDidUpdate(){
		console.log("componentDidUpdate");
	}
	upDate(){
		this.setState({data: this.state.data+2})
	}

	render(){
		return(
			<div>
		{this.state.data}
		
		<button onClick={this.upDate.bind(this)}>update state</button>
			<h1>{this.props.data}</h1>
		</div>
		);
		}
	}

class App extends React.Component{
	constructor(){
		super();
		this.state={data:1}
	}
	update(){
		this.setState({data:this.state.data+1})
	}
	render(){
		return(<div>
		<Test data={this.state.data}/>
		<button onClick={this.update.bind(this)}>update Props</button>
		</div>);

	}
}


ReactDOM.render(<App/>,document.getElementById('project'));