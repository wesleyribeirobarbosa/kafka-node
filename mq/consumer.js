const kafka = require("../index.js");

const consumer = kafka.consumer({ groupId: 'nouvenn-kafka-group' });

const run = async () => {

    await consumer.connect()
    await consumer.subscribe({ topic: 'topic_1'})
    await consumer.subscribe({ topic: 'topic_2'})
    await consumer.subscribe({ topic: 'topic_3'})
    await consumer.subscribe({ topic: 'topic_4'})
    await consumer.subscribe({ topic: 'topic_5'})
    await consumer.subscribe({ topic: 'topic_6'})
    await consumer.subscribe({ topic: 'topic_7'})
    await consumer.subscribe({ topic: 'topic_8'})
  
    await consumer.run({
        autoCommitInterval: 1000,
        eachMessage: async ({ partition, message }) => {
            console.log({
            partition,
            offset: message.offset
            })
      },
    })
  }
  
  run().catch(console.error);