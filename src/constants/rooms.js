import room1 from "../assets/images/room-1.jpg";
import room2 from "../assets/images/room-2.jpg";
import room3 from "../assets/images/room-3.jpg";
import room4 from "../assets/images/room-4.jpg";
import room5 from "../assets/images/room-5.jpg";
import room6 from "../assets/images/room-6.jpg";

export const ROOMS = [
    {
        id: 1,
        imgSrc: room1,
        title: "Suite Room",
        price: 120,
        maxPersons: 3,
        size: 45,
        view: "Sea View",
        bed: 1,
    },
    {
        id: 2,
        imgSrc: room2,
        title: "Family Room",
        price: 20,
        maxPersons: 3,
        size: 45,
        view: "Sea View",
        bed: 2,
    },
    {
        id: 3,
        imgSrc: room3,
        title: "Deluxe Room",
        price: 150,
        maxPersons: 5,
        size: 100,
        view: "City View",
        bed: 3,
    },
    {
        id: 4,
        imgSrc: room4,
        title: "Classic Room",
        price: 130,
        maxPersons: 5,
        size: 55,
        view: "City View",
        bed: 2,
    },
    {
        id: 5,
        imgSrc: room5,
        title: "Superior Room",
        price: 300,
        maxPersons: 6,
        size: 125,
        view: "Sea View",
        bed: 3,
    },
    {
        id: 6,
        imgSrc: room6,
        title: "Luxury Room",
        price: 500,
        maxPersons: 5,
        size: 145,
        view: "Sea View",
        bed: 2,
    },
];

export const ROOMS_TYPES = {
    SUITE: "Suite Room",
    FAMILY: "Family Room",
    DELUXE: "Deluxe Room",
    CLASSIC: "Classic Room",
    SUPERIOR: "Superior Room",
    LUXURY: "Luxury Room",
};