/* for config environment
migrate to .env, very soon.
*/

module.exports = {
    mongoose: {
        // uri : 'mongodb+srv://ayamyeagah:Kubeb1012@service-ais-db.kzhk0wn.mongodb.net/?retryWrites=true&w=majority&appName=service-ais-db'
        uri: 'mongodb+srv://ayamyeagah:Kubeb1012@cluster0.fmes5hv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    },

    collection: {
        raw: 'raw',
        vessel: 'vessel',
        anomaly: 'anomaly',
        message: 'message',
        view: {
            latest: 'latest',
            traffic: 'traffic'
        }
    },

    tcp: {
        host: '103.24.49.246',
        port: 34567
    },

    rabbitMQ: {
        uri: 'amqp://localhost',
        routingKey: 'nmea',
        exchange: 'dataExchange',
        infoQueue: 'rawQueue',
    },

    app: {
        port: 3000
    }
}