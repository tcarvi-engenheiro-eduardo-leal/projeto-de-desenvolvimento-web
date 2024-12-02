import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class RedisProvider {
  constructor(protected app: ApplicationContract) {}

  public async configure() {
    this.app.container.bind('Adonis/Addons/Redis', () => {
      return this.app.container.use('Adonis/Addons/Redis')
    })
  }
}
