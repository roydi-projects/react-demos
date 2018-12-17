
const products = [
    {
        id: 0,
        imageUrl: "https://static.meijer.com/Media/000/41250/0004125010200_1_A1C1_0600.png",
        name: "Milk 1 liter",
        quantity: 5,
        price: 1,
        insertionTime: "2018-01-11T11:57:39.616Z"
    },
    {
        id: 1,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91Euv1Km6HL._SX522AA522_PIbundle-40,TopRight,0,0_AA522_SH20_.jpg",
        name: "Orange juice 500ml",
        quantity: 10,
        price: 5,
        insertionTime: "2018-01-11T11:57:39.616Z"
    },
];
let nextId = 2;

export function getProducts() {
    return products;
}

export function getId() {
    return nextId;
}

export function updateId() {
    nextId++;
}