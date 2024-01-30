

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

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
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

export  function removeBook (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {

    return {...u, books: u.books.filter(b=> b !== bookForDelete)}
}

export  function addNewCompany (u: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    const newCompany = {id: 3, title: 'Google'}
    return {
        ...u, companies: [...u.companies, newCompany]
    }
}

export  function updateCompanyTitle (u: UserWithLaptopType & WithCompaniesType, companyId: number, newTitle: string) {

    return {
        ...u,
          companies: u.companies.map(el=> el.id === companyId ? {...el, title: newTitle} : el)
    }
    //один из простых вариантов этой же записи, самый обычный способ полный через if и else
    /*const copy: WithCompaniesType = {
        ...u,
        companies: u.companies.map(=>{
            if (c.id === companyId) {
                return {...c, title: newTitle}
            } else return c
        })
    }
    return copy*/
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


