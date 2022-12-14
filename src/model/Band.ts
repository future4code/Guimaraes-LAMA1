export class Band {
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string
    ) {}

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getMusic_genre(){
        return this.music_genre;
    }
    getResponsible() {
        return this.responsible;
    }
    setId(id: string) {
        this.id = id;
    }
    setName(name: string) {
        this.name = name;
    }   
    setMusic_genre(music_genre: string) {
        this.music_genre = music_genre;
    }
    setResponsible(responsible: string) {
        this.responsible = responsible;
    }
}

export interface CreateBandDTO{
    id: string,
    name: string,
    music_genre: string,
    responsible: string
}

export interface GetBandByNameDTO{
    name: string,
}