import {user} from "./Js_09_01";

function icreaseAge(u: UserType) {
    u.age++;
}

export type UserType = {
    name: string
    age: number
}

test("array reference test", () => {

    let users = [
        {
            name: 'Elena',
            age: 33
        },
        {
            name: 'Elena',
            age: 33
        },
    ];


    let admins = users
    admins.push({name: 'Bandit', age: 11})

    expect(users[2]).toEqual({name: 'Bandit', age: 11})
    expect(users[2].name).toBe('Bandit')
    expect(users[2].age).toBe(11)
    expect(users[0].name).toBe('Elena')

    const supermen = user
    supermen.age = 1000;

    expect(users[1].age).toBe(33)

})


test('value type test', ()=> {
    let userCount = 100;

    let adminCount = userCount

    adminCount++;

    expect(adminCount).toBe(101)
    expect(adminCount).toEqual(adminCount)

})









//---------------------------------------------------------------------------------------------
/*test("array test", () => {

    let users = [
        {
            name: 'Elena',
            age: 33
        },
        {
            name: 'Elena',
            age: 33
        },
    ];


    let admins = users
    admins.push({name: 'Bandit', age: 11})

    expect(users[2]).toEqual({name: 'Bandit', age: 11})
    expect(users[2].name).toBe('Bandit')
    expect(users[2].age).toBe(11)
    expect(users[0].name).toBe('Elena')

    const supermen = user
    supermen.age = 1000;

    expect(users[1].age).toBe(33)

})*/




//-----------------------------------------------------------------------------------------------
// test("big reference type test", ()=>{
//
//     let user: UserType = {
//         name: 'Elena',
//         age: 33
//     };
//
//     icreaseAge(user)
//
//     expect(user.age).toBe(34)
//
//     const supermen = user
//     supermen.age = 1000;
//
//     expect(user.age).toBe(1000)
//
// })

