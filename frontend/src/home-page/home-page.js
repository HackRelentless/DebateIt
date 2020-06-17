import React from 'react';
import Peer from 'peerjs';
import config from '../local/config';

class HomePage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.peer = new Peer(null, {
			host: config.peer_host,
			port: config.peer_port,
			path: config.peer_path
		});
	}

	componentDidMount()
	{
		console.log(this.props)

		const _this = this;

		this.setState({
			this_peer_id: this.peer.id,
		});

		this.peer.on('open', (id) => {
			_this.setState({
				this_peer_id: id,
			})
		});

		this.peer.on('connection', function (conn) {
			_this.setState({
				connected: true,
				connected_id: conn.peer,
			});
		});

		this.peer.on('disconnected', function (conn) {
			_this.setState({
				connected: false,
				connected_id: "",
			});
		});

		this.peer.on('error', function(err){
			alert("Counld not connect to peer");
		});
	}

	state = {
		this_peer_id: "",
		input_val: "",
		connected: false,
		connected_id: null,
	}

	connectToPeer = () => 
	{
		this.conn = this.peer.connect(this.state.input_val);
	}

	handleInputChange = (e) =>
	{
		this.setState({
			input_val: e.target.value,
		});
	}

	render()
	{
		return (
			<div>
				<h2>Your id is: {this.state.this_peer_id}</h2>
				<input id="id-connect-input" placeholder="Enter ID to connect here" value={this.state.input_val} onChange={this.handleInputChange}></input>
				<button onClick={this.props.test}>CLICK ME</button>
				<br></br>
				<p>Connected to: {this.state.connected_id}</p>
			</div>
		)
	}
}

export default HomePage;