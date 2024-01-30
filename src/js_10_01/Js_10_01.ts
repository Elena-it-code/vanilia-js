

export type UserType = {
    name: string
    hair: number,
    address: {
        city: string,
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = {
    books: Array<string>
}

export  function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power;

    return copy
}

export  function moveUserToOtherHouse (u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u,
        address: {...u.address,
            house: house}
    }
}

export  function addNewBooksToUser (u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export  function updateBook (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {

    return {...u, books: u.books.map(b=> b === oldBook ? newBook : b)}
}

export  function moveUser (u: UserWithLaptopType, city: string) {
    // 1 из вариантов записи
    /*const copy = {
        ...u, address: {...u.address, city: city}
    }

   /!* copy.address = {
        ...copy.address,
        city: city
    }*!/

    return copy*/

    // Либо такой вариант. Так будет правильнее:
    return {...u,
        address: {...u.address,
            city: city}
    }
}

export function upgradeUserLaptop (u:UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title
        }
    }
}