// 08 - Занятие по JS (Promises, async/await, static methods of Promise)




// *** ------- ***
// Все эти запросы выполнятся в произвольной последовательности.
// Смотря какой сервис быстрее даст ответ.
// Мы не можем тут сказать в какой последовательности они будут выполняться.

fetch(('https://bing.com/query=js')).then((data) => {
    console.log(data.url)
})

fetch(('https://google.com/query=js')).then((data) => {
    console.log(data.url)
})

fetch(('https://yahoo.com/query=js')).then((data) => {
    console.log(data.url)
})

fetch(('https://bing.com/query=js'))
    .then((data) => {
        console.log(data.url)
        fetch(('https://yahoo.com/query=js')).then((data) => {
            console.log(data.url)
        })
    })
    .then(() => {
        fetch(('https://google.com/query=js')).then((data) => {
            console.log(data.url)
        })

    })
// *** ------- ***






// *** ------- ***
// Чтобы гарантировать последовательность выполнения запросов, нам нужно правильно связать их через цепочку .then()
fetch(('https://bing.com/query=js'))
    .then((dataFromBing)=>{
        console.log(dataFromBing.url)
        return fetch('https://yahoo.com/query=js')
    })
    // .catch((error)=>{
    //     console.log('Error: ', error)
    //     //return error
    // })
    .then((dataFromYahoo)=>{
        console.log(dataFromYahoo.url)
        return fetch('https://google.com/query=js')
    })
    .then((dataFromGoogle)=>{
        console.log(dataFromGoogle.url)
    })
    .catch((error)=>{
        console.log('Error: ', error)
    })
    .then(()=>{
        console.log('Hi guys!!!!!')
    })

// *** Таким образом, каждый запрос выполняется последовательно, и мы гарантируем, что следующий запрос начнется только
// после завершения предыдущего.
// *** ------- ***






// *** ------- ***
// Все эти запросы выполнятся в строгой последовательности.
// Поскольку мы говорим и знаем, что они выполнятся в течении 2 секунд
// timeout1
// timeout2
// timeout3
setTimeout(()=>{
    console.log('timeout1')
}, 2000)

setTimeout(()=>{
    console.log('timeout2')
}, 2000)
setTimeout(()=>{
    console.log('timeout3')
}, 2000)
// *** ------- ***






// *** ------- ***
// Словить ОШИБКУ можем и методом .then(), он может принимать 2 параметра, 2 callback(а).
// 1) То чем он за- resolve(ится) , 2) то чем он за- reject(ится), т.е. словит ту самую ОШИБКУ.
// Ранее было именно так. Позже появился отдельный метод .catch(), для отловли ОШИБКИ
fetch(('https://bing.com/query=js')) // Здесь мы ловим ошибку самим  .then(), как вторым параметром
    .then((dataFromBing) => {
        console.log(dataFromBing.url)
    }, (error) => { // используем второй параметр
        console.log(error)
    })
// *** ОБЕ ЗАПИСИ ИНДЕНТИЧНЫ И ВЕРНЫ. НО ИСПОЛЬЗУЕТСЯ в настоящее время именно метод .catch() ***
fetch(('https://bing.com/query=js')) // Здесь мы ловим ошибку при помощи метода .catch()
    .then((dataFromBing) => {
        console.log(dataFromBing.url)
    })
    .catch((error) => { // метод .catch() - ловит ошибку
        console.log(error)
    })
// *** ------- ***





// *** ------- ***
fetch(('https://bing.com/query=js'))
    .then((dataFromBing)=>{
        console.log(dataFromBing.url)
        return fetch('https://yahoo.com/query=js')
    })
    .then((dataFromYahoo)=>{
        console.log(dataFromYahoo.url)
        return fetch('https://google.com/query=js')
    })
    .then((dataFromGoogle)=>{
        console.log(dataFromGoogle.url)
    })
    .catch((error)=>{
        console.log('Error: ', error)
    })
// *** ------- ***




// *** ------- ***
const foo = async () => {
    const dataFromBing = await fetch('https://bing.com/query=js')
    console.log(dataFromBing.url)
    const dataFromYahoo = await fetch('https://yahoo.com/query=js')
    console.log(dataFromYahoo.url)
    const dataFromGoogle = await fetch('https://google.com/query=js')
    console.log(dataFromGoogle.url)
}

foo()





// *** ------- ***
// Writing with function declaration:
async function XXX () {}

// Writing with function expression using async
const YYY = async function(){}
// *** ------- ***