interface Product {
    id : number,
    name: string,
    description: string,
    price: number,
    stars: number
    link: string,
    imgUrl: string,
    imgALt: string
}

export const Products:Product[] = [
    {
        id: 1,
        name: 'AMD Ryzen 9 5900X',
        description: '12-core, 24-Thread Unlocked Desktop Processor',
        price: 162.66,
        stars: 5,
        link : 'https://amzn.to/3NTuCBj',
        imgUrl: '/productImg/5900x.jpg',
        imgALt: 'Imagen de la caja del procesador'
    },
    {
        id: 2,
        name: 'Xbox Wireless Controller',
        description: 'Stellar Shift Special Edition Series X|S',
        price: 52.99,
        stars: 4,
        link : 'https://amzn.to/3rrYBZp',
        imgUrl: '/productImg/xboxStellarShift.jpg',
        imgALt: 'Imagen del control de xbox'
    }
    
]