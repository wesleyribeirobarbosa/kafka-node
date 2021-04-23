const {Kafka} = require('kafkajs');

const kafka = new Kafka({
  clientId: 'nouvenn-kafka',
  brokers: ['localhost:9092']
});

module.exports = kafka;