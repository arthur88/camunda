import React from "react";
import axios from "axios";

import LoadObj from "../Tools/Loading";
import rError from "../Tools/ErrorShow";




export default class Process extends React.Component {

	async postData() {
        const res = await axios.post("http://localhost:8080/engine-rest/process-definition/key/WatchMunster/start",'{}', 
		{
			"headers": {
				"Content-Type": "application/json",
				"Accept": "*/*",
				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Origin": "*"
			},
			crossdomain: true
		});
        return await res;
	}
	
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

		this.setState({ loading: true })

		this.postData()
			.then(
				data => this.setState({
					mapdata: data.data,
					loading: false
				}))
				.catch(err => { 
					this.setState({
						mapdata: null,
						error: err,
						loading: false
					})
				});
						  

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
		console.log('-------------------');
		console.log(mapdata);

		if(mapdata.links) {

			const listItems = mapdata.links[0];
			console.log(listItems);
		}
		
		return (
			<div>
				<div className="start-process col-12 col-sm-6">
					<table className="table table-striped table-hover">
					<tbody>
					<tr>
						<td>ID</td>
						<td> {mapdata.id} </td>
					</tr>
					<tr>
						<td>Definition ID</td>
						<td> {mapdata.definitionId} </td>
					</tr>
					<tr>
						<td>Business key</td>
						<td> {mapdata.businessKey} </td>
					</tr>	
					<tr>
						<td>Case Instance ID</td>
						<td> {mapdata.caseInstanceId} </td>
					</tr>	
					<tr>
						<td>Is ended</td>
						<td> {mapdata.ended === false ? "Not yet" : mapdata.ended} </td>
					</tr>		
					<tr>
						<td>Is Suspended</td>
						<td> {mapdata.suspended === false ? "Not yet" : mapdata.suspended} </td>
					</tr>	
					<tr>
						<td>Team ID</td>
						<td> {mapdata.tenantId} </td>
					</tr>		
					<tr>
						<td>Links</td>
						<td>

							<ul>
					
							</ul>
						</td>
					</tr>		
					</tbody>	
					</table>																													
				</div>
			
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