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

		axios.post("http://localhost:8080/engine-rest/process-definition/key/WatchMunster/start",'{}', 
		{
			"headers": {
				"Content-Type": "application/json",
				"Accept": "*/*",
				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Origin": "*"
			},
			crossdomain: true
		})
		.then((response) => {
			console.log(response);
			this.setState({
				mapdata: response,
				loading: false
            })
		})
		.catch((error) => {
			this.setState({
				mapdata: null,
				error: error,
				loading: false
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
		var mdata = Object.keys(mapdata).map(con => Object.keys(mapdata));

		if(error) {

			return this.error();
		}

		console.log(mdata);
		return (
			<div>
			{}
			</div>
		)
	
	}


	render() {

		if(this.state.loading) {
			
			return this.loading();
		} else if(this.state.error) {

			//return this.rError();
		} else {

			return this.show();
		}


	}
}