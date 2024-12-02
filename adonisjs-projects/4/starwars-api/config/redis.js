'use strict'

const Env = use('Env')

module.exports = {
  connection: {
    host: Env.get('REDIS_HOST', '127.0.0.1'),
    port: Env.get('REDIS_PORT', 6379),
  },
}
