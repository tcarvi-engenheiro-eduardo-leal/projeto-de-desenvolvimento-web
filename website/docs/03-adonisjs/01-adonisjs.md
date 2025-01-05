# Adonis Js

## Gere novo projeto igual, usando linha de comando e com versões atualizadas das dependências

### Instalação do ambiente (nvm, node e npm), usando mac
```bash  
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# nvm version
nvm -v # should print `0.40.0`

# download and install Node.js (you may need to restart the terminal)
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`

npm install -g @adonisjs/cli
```  

## Criar projeto AdonisJS
```bash
adonis new starwars-api --api-only
```  

## Entre no diretório do projeto
```bash
cd starwars-api
```  

## Edite o package.json do projeto para usar ESModules
```json
"type": "module",  // Define que o projeto usa ESModules
"bin": {
    "ace": "./ace.js"  // Aponta para o arquivo ace.js como binário executável
},
```

## E depois altere a extensão e o conteúdo do script ace, devido utilização de ESModules
```bash
mv ace ace.js
```  

```javascript title="Arquivo ace.js"
import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core/build/standalone.js'

new Ignitor(__dirname)
  .httpServer()
  .start()
```

## Instale dependências
```bash  
npm install axios @adonisjs/redis @adonisjs/ignitor reflect-metadata @adonisjs/core @adonisjs/assembler     
```  

## Adicione o provedor de Redis ao arquivo start/app.js:
```typescript
const providers = [
  '@adonisjs/core',
  '@adonisjs/redis/build/providers/RedisProvider',
]
```

## Crie um arquivo config/redis.js e adicione a seguinte configuração:
```javascript
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
```




## Edite o arquivo .env para usar o banco de dados SQLite/mariaDB:
```txt
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=adonis
```
- Você precisará configurar um banco de dados MySQL ou MariaDB localmente.

```typescript title="Edite config/database.ts para ter as seguintes linhas:"
connection: Env.get('DB_CONNECTION', 'mysql'),
mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    },
    migrations: {
      naturalSort: true,
    },
    healthCheck: false,
    debug: false
  },
```

## Configure as rotas
```bash
const Route = use('Route')

Route.get('people', 'PeopleController.index')
Route.get('people/:id', 'PeopleController.show')
Route.post('people/:id/favorite', 'PeopleController.favorite')
Route.get('people/favorites', 'PeopleController.getFavorites')
```

## Executar projeto, em seu diretório

```bash
npm run start
```  

## Criar modelo de Favoritos
```bash  
mkdir -p app/Models
touch app/models/Favorite.ts
```  

## Criar controller
```bash  
mkdir -p app/controllers
touch app/controllers/Favorite.ts
```  

## Garantir correção e qualidade do design do código
### Runs ESLint
```bash
npm run lint
``` 

### Run ESLint and auto-fix issues
```bash
npm run lint -- --fix
```  

### Runs prettier
```bash
npm run format
``` 
