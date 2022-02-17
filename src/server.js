// Require the framework and instantiate it
const getPassword = require('./service/getPassword');

const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify.post('/', async (request, reply) => {
  return { hello: 'ça roule ? ' };
});

fastify.get(
  '/password',
  {
    schema: {
      querystring: {
        length: { type: 'string' },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
      },
    },
  },
  async (request, reply) => {
    console.log(request.query);
    const generatedPassword = getPassword(
      request.query.length,
      request.query.isNumber
    );

    return generatedPassword;
  }
);

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
