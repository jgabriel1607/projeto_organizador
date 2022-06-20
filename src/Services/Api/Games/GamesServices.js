/* import { Api } from "../ApiConfig"
import { ApiException } from "../ApiException"

export interface IGame {
    id: number
    title: string
    summary: string
    platformList: string
    developers: string
    publishers: string
    releaseDate: string
    genres: string
    backgroundIamge: string
    squareIcon: string
    verticalCover: string
}


const getAll = async (): Promise<IGame[] | ApiException> => {
    try {
        const {data} = await Api().get("/games")
        return data
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao Consultar a Api.")
    }
    
}

const getById = async (id: number): Promise<IGame | ApiException> => {
    try {
        const {data} = await Api().get(`/games/${id}`)
        return data
    } catch (error: any) {
        return new ApiException(error.message || "Erro ao Consultar a Api.")
    }
}

const create = async () => {

}

const updateById = async () => {

}

const deleteById = async () => {

}

export const GamesServices = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
 */