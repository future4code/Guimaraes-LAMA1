import { Band } from '../model/Band';
import { connection } from './connection';

const TABLE = 'NOME_TABELA_BANDAS'

export class BandDataBase {

    public async CreateBand(band: Band) {
        try {

            await connection(TABLE).insert({
                id: band.getId(),
                name: band.getName(),
                music_genre: band.getMusic_genre(),
                responsible: band.getResponsible()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async GetBandByName(name: string) {
        try {
            const result = await connection(TABLE).where({ name: name })
            console.log(result);
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}