export interface iDvd {
    id: number;
    title: string;
    synopsis?: string;
    image: string;
    trailer?: string;
    category?: string[];
    qty: number;
}

export const sampleData = [
    {
        id: 0,
        title: "La La Land",
        image: "http://images.redbox.com/Images/EPC/boxartlarge/200126.jpg",
        category: 'drama,action'
    },
    {
        id: 1,
        title: "Rings",
        image: "http://images.redbox.com/Images/EPC/boxartlarge/8148.jpg",
        category: 'action,suspense'
    },
    {
        id: 2,
        title: "Split",
        image: "http://images.redbox.com/Images/EPC/boxartlarge/200158.jpg",
        category: 'crime,romance,comedy'
    }

];

export class Dvd {
    id: number;
    title: string;
    category: string[];
    synopsis: string;
    trailer: string;
    image: string;
    qty: number;

    constructor(obj: any) {
        this.id = obj.id;
        this.title = obj.title || 'Default Titlte';
        this.synopsis = obj.description  || 'This movie is about'
        this.image = obj.image || 'http://placehold.it/150x100';
        this.trailer = obj.trailer || '#';

        if (typeof obj.category === 'string' && obj.category) {
            //convert string separated by comma into an array
            this.category = obj.category.split(',');
        } else {
            this.category = [];
        }

        this.qty = obj.qty || 5;
    }
}

