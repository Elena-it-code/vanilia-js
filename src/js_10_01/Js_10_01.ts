

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
export  function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power;

    return copy
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