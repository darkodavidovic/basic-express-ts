import { MQTTPubSub } from 'graphql-mqtt-subscriptions'
import { PubSub } from 'graphql-subscriptions'
import { connect, IClientOptions, MqttClient } from 'mqtt'

let clientId = `backend_blackbox_${Math.random().toString(16).substr(2, 8)}`

const hostName = "wss://darko.mnode.net"

const mqttOptions: IClientOptions = {
	port: 8883,
	path: '/mqtt',
	protocolVersion: 4,
	// username: "client",
	// password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6ImRhcmtvIiwiZW1haWwiOiJkYXJrb0BkYXJrby5jb20iLCJwYXNzIjoiJDJiJDEwJHlUdDZDRGxZcDFqWE8xbHVhLzZUcXV6MEdsWDFvZHMuV2FpMWpqaXVSZ3YxT0ovNHRNSksuIiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiYWN0aXZlIjpmYWxzZSwicm9sZUlkIjoxLCJzeXN0ZW0iOmZhbHNlLCJpYXQiOjE2OTQ3NzAwNTh9.4wqsUvLSVRqR9E31mkB-z80jGzYyAJVvLMyNDfM1f9w',
	username: "username",
	password: 'password',
	rejectUnauthorized: true,
	keepalive: 10,
	clean: true,
	reconnectPeriod: 1000,
	connectTimeout: 30 * 1000,
	clientId,
	will: {
		topic: 'blackbox/general',
		payload: Buffer.from("Connection Closed Abnormally."),
		qos: 0,
		retain: false
	}
}

export let mqttClient: MqttClient = connect(hostName, mqttOptions)

mqttClient.on('error', (err) => {
	console.log('MQTT Error', err)
	mqttClient.end()
})

mqttClient.on('connect', () => {
	mqttClient.subscribe("blackbox/general", { qos: 0 })
	console.log(`MQTT Connected: ${clientId}`)
})

mqttClient.on("message", (topic, message) => {
	const parsedMessage = Buffer.from(message as any, 'base64').toString();
	console.log({ topic, parsedMessage })
})

mqttClient.on('close', () => {
	console.log('MQTT connection closed, attempting to reconnect...');
	clientId = `backend_blackbox_${Math.random().toString(16).substr(2, 8)}`
	mqttClient = connect(hostName, mqttOptions)
});

//@ts-ignore
export const mqttPubSub = new MQTTPubSub({ client: mqttClient })
export const pubsub = new PubSub()
