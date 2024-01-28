import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from "./Js_10_01";



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

