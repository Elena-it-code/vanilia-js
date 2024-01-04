import {user} from "./Js_09_01";

function icreaseAge (u:UserType) {
    u.age ++;
}

export type UserType = {
    name: string
    age: number
}

test("big reference type test", ()=>{

    let user: UserType = {
        name: 'Elena',
        age: 33
    };

    icreaseAge(user)

    expect(user.age).toBe(34)

    const supermen = user
    supermen.age = 1000;

    expect(user.age).toBe(1000)

})

