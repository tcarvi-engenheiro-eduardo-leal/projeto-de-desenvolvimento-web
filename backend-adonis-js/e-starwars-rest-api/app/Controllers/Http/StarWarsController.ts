import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Redis from '@ioc:Adonis/Addons/Redis'
import axios from 'axios'

const SWAPI_BASE_URL = 'https://swapi.dev/api/people/'

export default class StarWarsController {
  // Lista todos os personagens
  public async listCharacters({ response }: HttpContextContract) {
    try {
      const { data } = await axios.get(SWAPI_BASE_URL)
      response.json(data)
    } catch (error) {
      response.status(500).send('Erro ao listar personagens')
    }
  }

  // Busca personagem por nome
  public async searchCharacter({ request, response }: HttpContextContract) {
    const name = request.input('name')
    const url = `${SWAPI_BASE_URL}?search=${name}`

    try {
      const { data } = await axios.get(url)
      response.json(data)
    } catch (error) {
      response.status(500).send('Erro ao buscar personagens')
    }
  }

  // Obtém detalhes de um personagem por ID
  public async getCharacter({ params, response }: HttpContextContract) {
    const characterId = params.id
    const url = `${SWAPI_BASE_URL}${characterId}/`

    try {
      const { data } = await axios.get(url)
      response.json(data)
    } catch (error) {
      response.status(500).send('Erro ao obter detalhes do personagem')
    }
  }

  // Adiciona ou remove um personagem dos favoritos
  public async toggleFavorite({ params, response }: HttpContextContract) {
    const characterId = params.id
    const characterUrl = `${SWAPI_BASE_URL}${characterId}/`

    try {
      const isFavorite = await Redis.sismember('favorites', characterId)
      if (isFavorite) {
        await Redis.srem('favorites', characterId)
        response.send({ message: 'Personagem removido dos favoritos' })
      } else {
        await Redis.sadd('favorites', characterId)
        response.send({ message: 'Personagem adicionado aos favoritos' })
      }
    } catch (error) {
      response.status(500).send('Erro ao atualizar favoritos')
    }
  }

  // Lista personagens favoritos
  public async listFavorites({ response }: HttpContextContract) {
    try {
      const favoriteIds = await Redis.smembers('favorites')
      const favoriteCharacters = await Promise.all(
        favoriteIds.map(async (id) => {
          const { data } = await axios.get(`${SWAPI_BASE_URL}${id}/`)
          return data
        })
      )
      response.json(favoriteCharacters)
    } catch (error) {
      response.status(500).send('Erro ao listar favoritos')
    }
  }

}
