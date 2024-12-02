import { RedisConfig } from '@ioc:Adonis/Addons/Redis'

const redisConfig: RedisConfig = {
  connection: 'local',
  connections: {
    local: {
      host: '127.0.0.1',
      port: 6379,
      password: '',
      db: 0,
      keyPrefix: '',
    },
  },
}
export default redisConfig
