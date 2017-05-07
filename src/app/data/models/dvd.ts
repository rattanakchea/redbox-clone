export interface iDvd {
    id: number;
    title: string;
    synopsis?: string;
    image: string;
    trailer?: string;
    category?: string[];
}

export const sampleData = [
    {
        id: 0,
        title: "La La Land",
        image: "http://images.redbox.com/Images/EPC/boxartlarge/200126.jpg"
    },
    {
        id: 1,
        title: "Rings",
        image: "http://images.redbox.com/Images/EPC/boxartlarge/8148.jpg"
    },
    {
        id: 2,
        title: "Split",
        image: "http://images.redbox.com/Images/EPC/boxartlarge/200158.jpg"
    }

];

export class Dvd {
    id: number;
    title: string;
    category: string[];
    synopsis: string;
    trailer: string;
    image: string;

    constructor(obj: any) {
        this.id = obj.id;
        this.title = obj.title || 'Default Titlte';
        this.synopsis = obj.description  || 'This movie is about'
        this.image = obj.image || 'http://placehold.it/150x300';
        this.trailer = obj.trailer || '#';
        this.category = obj.category || ['horror'];
    }
}

