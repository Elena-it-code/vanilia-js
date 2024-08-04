// 08 - Занятие по JS (Promises, async/await, static methods of Promise)


// *** ------- ***
// Все эти запросы выполнятся в произвольной последовательности.
// Смотря какой сервис быстрее даст ответ.
// Мы не можем тут сказать в какой последовательности они будут выполняться.

/*fetch(('https://bing.com/query=js')).then((data) => {
    console.log(data.url)
})

fetch(('https://google.com/query=js')).then((data) => {
    console.log(data.url)
})

fetch(('https://yahoo.com/query=js')).then((data) => {
    console.log(data.url)
})*/

/*fetch(('https://bing.com/query=js'))
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

    })*/
// *** ------- ***


// *** ------- ***
// Чтобы гарантировать последовательность выполнения запросов, нам нужно правильно связать их через цепочку .then()
/*fetch(('https://bing.com/query=js'))
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
    })*/

// *** Таким образом, каждый запрос выполняется последовательно, и мы гарантируем, что следующий запрос начнется только
// после завершения предыдущего.
// *** ------- ***


// *** ------- ***
// Все эти запросы выполнятся в строгой последовательности.
// Поскольку мы говорим и знаем, что они выполнятся в течении 2 секунд
// timeout1
// timeout2
// timeout3
/*setTimeout(()=>{
    console.log('timeout1')
}, 2000)

setTimeout(()=>{
    console.log('timeout2')
}, 2000)
setTimeout(()=>{
    console.log('timeout3')
}, 2000)*/
// *** ------- ***


// *** ------- ***
// Словить ОШИБКУ можем и методом .then(), он может принимать 2 параметра, 2 callback(а).
// 1) То чем он за- resolve(ится) , 2) то чем он за- reject(ится), т.е. словит ту самую ОШИБКУ.
// Ранее было именно так. Позже появился отдельный метод .catch(), для отловли ОШИБКИ
/*fetch(('https://bing.com/query=js')) // Здесь мы ловим ошибку самим  .then(), как вторым параметром
    .then((dataFromBing) => {
        console.log(dataFromBing.url)
    }, (error) => { // используем второй параметр
        console.log(error)
    })*/
// *** ОБЕ ЗАПИСИ ИНДЕНТИЧНЫ И ВЕРНЫ. НО ИСПОЛЬЗУЕТСЯ в настоящее время именно метод .catch() ***
/*fetch(('https://bing.com/query=js')) // Здесь мы ловим ошибку при помощи метода .catch()
    .then((dataFromBing) => {
        console.log(dataFromBing.url)
    })
    .catch((error) => { // метод .catch() - ловит ошибку
        console.log(error)
    })*/
// *** ------- ***


// *** ------- ***
/*fetch(('https://bing.com/query=js'))
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
    })*/
// *** ------- ***


// *** -------    asyng/await    --------- ***
// async/await - это синтаксический сахар для работы с промисами (promises), который позволяет писать асинхронный код,
// который выглядит и читается как синхронный.
// async: Используется перед функцией, чтобы указать, что эта функция возвращает промис.
// await: Используется внутри async-функции, чтобы остановить выполнение функции до тех пор, пока промис,
// переданный в await, не разрешится или не отклонится.
// const foo = async () => {
//     const dataFromBing = await fetch('https://bing.com/query=js')
//     console.log(dataFromBing.url)
//     const dataFromYahoo = await fetch('https://yahoo.com/query=js')
//     console.log(dataFromYahoo.url)
//     const dataFromGoogle = await fetch('https://google.com/query=js')
//     console.log(dataFromGoogle.url)
// }
//
// foo()
// *** ------- ***






// *** -------    asyng/await try/catch и  finally    --------- ***
// Если нужно отловить ошибку, то используем внутри asyng/await  -  try /catch, чтобы ее отловить.
// try/catch - это блоки, которые используются для обработки исключений в JavaScript.
// Они позволяют нам выполнить код, который может потенциально вызвать ошибку (try), и если такая
// ошибка возникает, поймать и обработать ее (catch).
// try: Блок кода, который может потенциально вызвать ошибку.
// catch: Блок кода, который обрабатывает ошибку. Он получает объект ошибки как аргумент.
// finally - это необязательный блок, который может быть добавлен после try/catch. Он выполняется всегда, независимо от
// того, была ли ошибка или нет.
const foo1 = async () => {
    try {
        const dataFromBing = await fetch('https://bing.com/query=js')
        console.log(dataFromBing.url)
        const dataFromYahoo = await fetch('https://yahoo65895.com/query=js')
        console.log(dataFromYahoo.url)
        const dataFromGoogle = await fetch('https://google.com/query=js')
        console.log(dataFromGoogle.url)
    } catch (error) {   // отработает в случае ошибки
        console.log(error) // Обработка ошибки
    } finally {    // отработает в любом случае
        console.log("finally") // Код, который выполняется всегда
    }
}

foo1()
// *** ------- ***







// *** ------- ***
// Writing with function declaration:
async function XXX() {
}

// Writing with function expression using async
const YYY = async function () {
}
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .all()  ----- ***
// этот метод .all() - в себя принимает массивом, те Promise(ы), которые надо выполнить.
// Внезависимости от их очередности в которой они там выполнятся, запишутся в массив они в той же последовательности
// как мы их передали в массив. И как и все Promise(ы) наш  Promise возвращает новый промис.
// А это значит, что мы можем на него подписаться


const pr1 = fetch('https://bing.com/query=js')
const pr2 = fetch('https://google.com/query=js')
const pr3 = fetch('https://yahoo.com/query=js')

const superPromise = Promise.all([pr1, pr2, pr3])
superPromise.then((bigData) => {
    console.log(bigData[0].url)
    console.log(bigData[1].url)
    console.log(bigData[2].url)
    console.log('2') // выполнится только тогда, когда все три за- resolve(ятся), не раньше
})


// Более сокращенная запись без создания лишних переменных
Promise.all([
    fetch('https://bing.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://yahoo.com/query=js')
]).then((bigData) => {
    console.log(bigData[2].url)
}).catch((err)=>{
    console.log(err)
})
// Если хотя бы в одном ошибка, то Promise наш за- resolve(ится) и мы попадем в  .catch()
// Даже если какие-то уже успели выполнится
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .race()  ----- ***
// Этот метод ждет первое изменение статуса любого Promise(а), из числа переданных в него.
// Неважно за- resolve(ится) или за- reject(ится)
// Кто первый поменяет свое состояние на resolve или reject (любой статус)
// В том Promise, где ошибка, такой Promise возможно быстрее поменяет свой статус на reject,
// чем тот какой-то из Promise(ов) за- resolve(ится).
// То тогда наш Promise за- reject(ится),и  мы попадем в  .catch()
// !!! НО НЕ ВСЕГДА !!!
// Если какй-то из Promise за- resolve(ится) быстрее, чем какйо-то за- reject(ится), то мы попадем в .then()
// Т.е. нас инетресует ЛЮБОЕ!!!! первое изменение Promise(а) на resolve или reject (любой статус)

Promise.race([
    fetch('https://bing.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://yahoo.com/query=js'),
    fetch('https://duckduck.com/query=js')
]).then((data)=>{
    console.log(data.url)
}).catch((err)=>{
    console.log(err)
})
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .any()  ----- ***
// Этот метод дожидается любой положительный результат. Изменение статуса Promise(а) на resolve.
// Работает как логическое || (ИЛИ). Если есть хотя бы один true, а сотальные false, то будет true. Если все false, то тогда только false.
// Если все за- reject(ятся), то тогда наш Promise, который возвращает наш .any() - за- reject(ится). И как следствие попадем в .catch()
Promise.any([
    fetch('https://bing.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://yahoo.com/query=js'),
    fetch('https://duckduck.com/query=js')
]).then((data)=>{
    console.log(data.url)
}).catch((err)=>{
    console.log(err)
})
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .allSettled()  ----- ***
// Его главная особенность по сравнению с тремя предыдущими методами, что в .catch() мы НИКОГДА НЕ ПОПАДЕМ!!!
// Потому что этот Promise, который .allSettled() возвращает нам, он всегда resolve(ится)
// Просто resolve(ится) с разными массивом
// Даже если все переданные в нам массив имеют ошибку и за- reject(ятся). То наш Promise,
// который .allSettled() возвращает нам, он все равно resolve(ится)
// В этом масиве мы уже увидим все статусы переданных Promise(ов):      status: 'rejected' и причины, почему призощли ошибки
// В это методе .catch() - БЕСПОЛЕЗЕН.
// Мы в .then() уже обрабатываем результаты работы всех наших запросов
Promise.allSettled([
    fetch('https://bing66.com/query=js'),
    fetch('https://google33.com/query=js'),
    fetch('https://yahoo3.com/query=js'),
]).then((data)=>{
    console.log("Then ---------> ", data)
})
// *** ------- ***