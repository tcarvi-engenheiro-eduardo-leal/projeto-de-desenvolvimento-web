import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core/build/standalone.js'

new Ignitor(__dirname)
  .httpServer()
  .start()
