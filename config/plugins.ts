module.exports = {
    settings: {
      cors: {
        enabled: true,
        origin: ['*'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        headers: ['Content-Type', 'Authorization'],
      },
    },
  };
  