import { Show } from "../model/Show";
import { connection } from "./connection"

const TABLE = 'NOME_TABELA_SHOWS'

export class ShowDataBase {

    public async CreateShow(show: Show) {
        try {
            await connection(TABLE)
                .insert({
                    id: show.getId(),
                    week_day: show.getWeek_day(),
                    start_time: show.getStart_time(),
                    end_time: show.getEnd_time(),
                    band_id: show.getBand_id()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }}

    public async ShowByDate(week_day: string) {
        try {
            const result = await connection(TABLE).where({ week_day }).orderBy('start_time', 'asc')
            console.log(result);
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }}
        }

  