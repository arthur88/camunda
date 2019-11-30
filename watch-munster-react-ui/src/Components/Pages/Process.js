import React from "react";
import axios from "axios";

import LoadObj from "../Tools/Loading";
import rError from "../Tools/ErrorShow";

export default class Process extends React.Component {

	constructor(props) {

		super(props);

		this.state = {

			processName: "WatchMunster",
			error: null,
			loading: false,
			mapdata: []
		}
	}

	componentDidMount() {

		/*axios.post("http://127.0.0.1:8080/engine-rest/process-definition/key/"+ this.state.processName + "/start",'{}', 
		{
			"headers": {
				"Content-Type": "application/json",
				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Origin": "http://localhost:8080"
			},
			crossdomain: true
		})
		.then(function(response){

			console.log(response);
		})
		.catch(function(error){

			console.log(error);
		}) */

		
		fetch("http://localhost:8080/engine-rest/process-definition/key/"+ this.state.processName + "/start", 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin' : '',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials':true,

				},
				crossorigin:true,
				body: JSON.stringify({})
			}
		)
		.then(response => response.json())
		.then(mapdata => {
			this.setState({
				loading: false,
				mapdata
			})
		})
	}


	loading() {
		return <LoadObj />
	}

	rError() {
		return <rError error={this.state.error.message} />

	}

	show() {

		const { error, mapdata } = this.state;

		if(error) {

			return this.error();
		}

		return (

			<div>

			</div>
		)
	}


	render() {

		if(this.state.loading) {
			
			return this.loading();
		} else if(this.state.error) {

			return this.rError();
		} else {

			this.show();
		}

		return(

			<section id="process">Process</section>
		)
	}
}