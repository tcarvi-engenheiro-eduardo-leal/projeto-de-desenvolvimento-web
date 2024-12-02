/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/


// Route.get('/', async () => {
//   return { hello: 'world' }
// })

import Route from '@ioc:Adonis/Core/Route'

Route.get('people', 'StarWarsController.listCharacters') // Listar todos os personagens
Route.get('people/search', 'StarWarsController.searchCharacter') // Buscar personagem por nome
Route.get('people/:id', 'StarWarsController.getCharacter') // Obter detalhes de um personagem por ID
Route.post('people/:id/favorite', 'StarWarsController.toggleFavorite') // Adicionar/Remover favorito
Route.get('people/favorites', 'StarWarsController.listFavorites') // Listar personagens favoritos
