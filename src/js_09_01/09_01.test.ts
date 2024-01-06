import {user} from "./Js_09_01";

function icreaseAge(u: UserType) {
    u.age++;
}

export type UserType = {
    name: string
    age: number,
    address: {
        title: string
    }
}

test("reference type array test", () => {
    const address = {
        title: 'Saint-Petersburg'
    }

    let user: UserType = {
        name: 'Elena',
        age: 33,
        address: address
    };

    let user2: UserType ={
        name: 'Xenia',
        age: 34,
        address: address
    }

    const users = [ user, user2, {name: 'Emmy', age: 3, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Helen'

    expect(users[0].name).toBe('Helen')
    expect(user.name).toBe('Helen')

})

test("sort array test", () => {

    const letters = ['c', 'd', 'a', 'z', 'e']

    pasportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
    })

function pasportist (letters:any) {
    const copy = [...letters].sort();
    console.log(copy);
}



test("reference type test", () => {
    const address = {
        title: 'Saint-Petersburg'
    }

    let user: UserType = {
        name: 'Elena',
        age: 33,
        address: address
    };

    let user2: UserType ={
        name: 'Xenia',
        age: 34,
        address: address
    }

    address.title = 'Saint-Petersburg City';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Saint-Petersburg City')

})


test("array reference test", () => {

    let users = [
        {
            name: 'Elena',
            age: 33,
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


test('value type test', () => {
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

