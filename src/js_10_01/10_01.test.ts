import {UserType} from "./Js_10_01";

function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power;

    return copy
}

test("Test for surface copying of an object. Without deep nesting", () => {
    let user: UserType = {
        name: 'Elena',
        hair: 32,
        address: {
            title: 'Saint-Petersburg'
        }
    };

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

