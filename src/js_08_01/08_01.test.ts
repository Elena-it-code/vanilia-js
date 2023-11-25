
export type UsersType ={
    [key: string]: {id:number, name: string}
}
let users: UsersType={

}

beforeEach(()=> {
    users = {
        '101': {id: 101, name: 'Ivan'},
        '326465': {id: 326465, name: 'Lena'},
        '586': {id: 586, name: 'Saha'},
        '8988': {id: 8988, name: 'Dima'},
        '1': {id: 1, name: 'Xenia'},
    }
})

test("should update corresponding user", ()=>{
    users[1].name = 'Elena'

    expect(users[1].name).toBe('Elena')
})


//либо можем проверить всеь объект
test("should update corresponding user", ()=>{
    users['1'].name = 'Elena'
    //toEqual сравнивает объекты по значению
    expect(users['1']).toEqual({id: 1, name: 'Elena'})
})


test("should delete corresponding user", ()=>{
    delete users['1']
    // свойство которое мы удалили, оно должно показать как toBeUndefined()
    expect(users['1']).toBeUndefined()
})