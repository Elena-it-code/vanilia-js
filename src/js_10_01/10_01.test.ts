import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./Js_10_01";



test("Test for surface copying of an object. Without deep nesting", () => {
    let user: UserType = {
        name: 'Elena',
        hair: 32,
        address: {
            city: 'Saint-Petersburg',
            house: 12
        }
    };

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: 'Elena',
        hair: 32,
        address: {
            city: 'Saint-Petersburg',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const movedUser = moveUser(user, 'Moscow')

    //user = movedUser

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Moscow')
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: 'Elena',
        hair: 32,
        address: {
            city: 'Saint-Petersburg',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const userCopy = upgradeUserLaptop(user, 'MacBook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')

})

test("change house", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: 'Elena',
        hair: 32,
        address: {
            city: 'Saint-Petersburg',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)


})

test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: 'Elena',
        hair: 32,
        address: {
            city: 'Saint-Petersburg',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')


})

