interface Product {
    id : number,
    name: string,
    description: string,
    prevPrice: number,
    price: number,
    discount: number,
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
        prevPrice: 569.99,
        discount: 48,
        price: 290.00,
        stars: 5,
        link : 'https://amzn.to/3NTuCBj',
        imgUrl: '/productImg/5900x.jpg',
        imgALt: 'Imagen de la caja del procesador'
    },
    {
        id: 2,
        name: 'Xbox Wireless Controller',
        description: 'Stellar Shift Special Edition Series X|S',
        prevPrice: 69.99,
        discount: 24,
        price: 52.99,
        stars: 4,
        link : 'https://amzn.to/3rrYBZp',
        imgUrl: '/productImg/xboxStellarShift.jpg',
        imgALt: 'Imagen del control de xbox'
    },
    {
        id: 3,
        name: 'SANSUI Monitor 22 in',
        description: '1080p FHD 75Hz Computer Monitor with HDMI VGA',
        prevPrice: 99.99,
        discount: 25,
        price: 74.99,
        stars: 4,
        link : 'https://amzn.to/3rBBSKG',
        imgUrl: '/productImg/Sansui22.jpg',
        imgALt: 'Imagen del tv Sansui 22In'
    }
    
]