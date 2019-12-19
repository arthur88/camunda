const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");

const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };
const client = new Client(config);

client.subscribe("DecideOnExpansion", async function({ task, taskService }) {

	var north = Math.random() >= 0.5;
	const processVariables = new Variables();

  	processVariables.set("north", north);

  await taskService.complete(task, processVariables);
});
