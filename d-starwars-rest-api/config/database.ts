import Env from '@ioc:Adonis/Core/Env'
import { databaseConfig } from '@adonisjs/lucid/build/config'

const dbConfig = databaseConfig({
  connection: Env.get('DB_CONNECTION', 'sqlite'),
  connections: {
    sqlite: {
      client: 'sqlite',
      connection: {
        filename: Env.get('DB_DATABASE', 'db.sqlite3'),
      },
      useNullAsDefault: true,
    },
  },
})

export default dbConfig
