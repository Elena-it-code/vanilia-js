// 09 - Занятие по JS (JS Asynchronous, Event Loop, Call Stack, Web API, Micro/Macro queues, Rendering (animation) queue)

// Разберёмся с асинхронностью в JavaScript, включая такие понятия, как Event Loop, Call Stack, Web API,
// а также микро- и макроочереди.
//
// ### Основные компоненты
// 1. **Call Stack (Стек вызовов)**:
//    - Это структура данных, которая управляет выполнением функций. Когда функция вызывается, она добавляется в стек.
//    Когда выполнение функции завершается, она удаляется из стека.
//
// 2. **Web API**:
//    - Это набор функций, предоставляемых браузером (например, `setTimeout`, DOM-манипуляции, AJAX-запросы), которые
//    работают асинхронно. Когда вы вызываете такую функцию, она не блокирует основной поток выполнения.
//
// 3. **Event Loop (Цикл событий)**:
//    - Это механизм, который следит за стеком вызовов и очередями задач. Если стек вызовов пуст, он берёт первую
//    задачу из очереди и помещает её в стек для выполнения.
//
// ### Очереди задач
//
// 1. **Macro Task Queue (Макроочередь)**:
//    - Сюда попадают задачи, такие как `setTimeout`, `setInterval`, обработчики событий и другие.
//    Каждая макрозадача выполняется полностью, прежде чем Event Loop перейдёт к следующей.
//
// 2. **Micro Task Queue (Микроочередь)**:
//    - Сюда попадают задачи, такие как `Promise.then`. Микрозадачи выполняются сразу после текущей макрозадачи,
//    но до того, как Event Loop возьмёт следующую макрозадачу.
//
// ### Порядок выполнения
//
// 1. **Выполнение кода**:
//    - Код выполняется синхронно, начиная с первой строки. Все функции, вызванные в коде, добавляются в стек вызовов.
//
// 2. **Асинхронные операции**:
//    - Когда встречается асинхронная операция (например, `setTimeout`), она передаётся в Web API, а основная программа продолжается.
//
// 3. **Добавление задач в очереди**:
//    - Как только асинхронная операция завершается, соответствующая задача добавляется в одну из очередей (макро или микро).
//
// 4. **Event Loop**:
//    - Если Call Stack пуст, Event Loop проверяет микрозадачи и выполняет их все. Затем берёт одну макрозадачу и выполняет её. После этого цикл повторяется.
//
// ### Пример 1


console.log('Начало');

setTimeout(() => {
  console.log('Макрозадача');
}, 0);

Promise.resolve().then(() => {
  console.log('Микрозадача 1');
}).then(() => {
  console.log('Микрозадача 2');
});

console.log('Конец');


// **Порядок выполнения**:
// 1. `Начало`
// 2. `Конец`
// 3. `Микрозадача 1`
// 4. `Микрозадача 2`
// 5. `Макрозадача`
//
// ### Почему так происходит?
//
// - Сначала выполняется весь синхронный код.
// - Затем выполняются все микрозадачи.
// - После этого Event Loop берёт следующую макрозадачу.
//
// *** ------- ***







// *** ------- ***
// В браузере также существует отдельная очередь для анимаций. Рассмотрим, как это работает:
// ### Request Animation Frame
// - **`requestAnimationFrame`**: Это специальный API для создания плавных анимаций. Он позволяет браузеру оптимизировать
// перерисовку, синхронизируя её с частотой обновления дисплея (обычно 60 кадров в секунду).
//
// ### Как это работает
//
// 1. **Запрос кадра**: Когда вы вызываете `requestAnimationFrame`, вы ставите функцию в очередь на выполнение перед с
// ледующим обновлением экрана.
//
// 2. **Выполнение анимаций**: Функции, поставленные в очередь с помощью `requestAnimationFrame`,
// выполняются до макро- и микрозадач, но после завершения текущего цикла рендеринга.
//
// ### Порядок выполнения
//
// 1. **Call Stack**: Выполняется весь синхронный код.
// 2. **Micro Tasks**: Выполняются все микрозадачи (например, обработчики `Promise`).
// 3. **Animation Frame**: Выполняются все функции, поставленные в очередь с помощью `requestAnimationFrame`.
// 4. **Macro Tasks**: Выполняется первая макрозадача.
//




// ### Пример 2
console.log('Начало'); // 1

requestAnimationFrame(() => {
  console.log('Анимация'); // 4
});

Promise.resolve().then(() => {
  console.log('Микрозадача'); // 3
});

setTimeout(() => {
  console.log('Макрозадача'); // 5
}, 0);

console.log('Конец'); // 2


// **Порядок выполнения**:
// 1. `Начало`
// 2. `Конец`
// 3. `Микрозадача`
// 4. `Анимация`
// 5. `Макрозадача`
// *** ------- ***







// *** ------- ***
// ### Пример 3
function a1 (){
  console.log('a1')
}

setTimeout(function a() {
  console.log('a')
}, 0);

Promise.resolve().then(function b() {
  console.log('b')
});

function a4(){
  console.log('a4')
}

a1()
a4()

// **Порядок выполнения**:
// 1. `a1`
// 2. `a4`
// 3. `b`
// 4. `a`
// *** ------- ***







// *** ------- ***
// ### Пример 4
console.log('a') // попадет в --> Call Stack, т.к. синхронный код, то сразу --> выполнится

setTimeout(function () { // попадет в --> Call Stack --> т.к. js не умеет считать секунды(асинхроннный код), то дальше попадет в Web Api, через 1 секунду в --> MacroTask, как только Call Stack будет пуст, то попадет в --> Call Stack для выполнения и --> выполнится
  console.log('timeout')
}, 1000)

console.log('b') // --> попадет в Call Stack, т.к. синхронный код, то сразу --> выполнится

console.log('c') // --> попадет в Call Stack, т.к. синхронный код, то сразу --> выполнится

// a, b, c, timeout
// *** ------- ***







// *** ------- ***
// ### Пример 5
console.log(1) // попадет в --> Call Stack, т.к. синхронный код, то сразу --> выполнится

setTimeout(function firstFN() {  // попадет в --> Call Stack --> т.к. js не умеет считать секунды(асинхроннный код), то дальше попадет в Web Api, и через 8 секунду в --> MacroTask, как только Call Stack будет пуст, то попадет в --> Call Stack для выполнения и --> выполнится
  console.log(2)
}, 8000)

setTimeout(function secondFN() { // попадет в --> Call Stack --> т.к. js не умеет считать секунды(асинхроннный код), то дальше попадет в Web Api, и через 4 секунды в --> MacroTask, как только Call Stack будет пуст, то попадет в --> Call Stack для выполнения и --> выполнится
  console.log(3)
}, 4000)

setTimeout(function thirdFN() { // попадет в --> Call Stack --> т.к. js не умеет считать секунды(асинхроннный код), то дальше попадет в Web Api, и через 3 секунды в --> MacroTask, как только Call Stack будет пуст, то попадет в --> Call Stack для выполнения и --> выполнится
  console.log(4)
}, 3000)

console.log(5) // попадет в --> Call Stack, т.к. синхронный код, то сразу --> выполнится

// 1, 5, 4, 3, 2
// *** ------- ***







// *** ------- ***
// ### Пример 6
setTimeout(function () {
  console.log(1)
}, 1000)

setTimeout(function () {
  console.log(2)
}, 1000)

setTimeout(function () {
  console.log(3)
}, 1000)

setTimeout(function () {
  console.log(4)
}, 1000)

// каждая попадет в --> Call Stack --> т.к. js не умеет считать секунды(асинхроннный код), дальше попадет в Web Api,
// и через 1 секунду в --> MacroTask, как только Call Stack будет пуст, то попадет в --> Call Stack и встанет в очередь
//  для выполнения и --> выполнится
// 1, 2, 3, 4
// *** ------- ***







// *** ------- ***
// ### Пример 7
function a() {
  setTimeout(() => {
    console.log('a')
  })
}
function b() {
  console.log('b')
}

a()

new Promise(function (res, rej) {
  console.log('create promise')
  res()
}).then(() => {
  setTimeout(function timer() {
    console.log('timeout')
  }, 0)
})

b()
// create promise, b, a, timeout
// https://www.jsv9000.app/?code=ZnVuY3Rpb24gYSgpIHsgLy8gc3RhY2sgLSB3ZWJBcGkgLSBNYWNybyAtIENTdGFjaw0KICBzZXRUaW1lb3V0KCgpID0%2BIHsNCiAgICBjb25zb2xlLmxvZygnYScpDQogIH0pDQp9DQpmdW5jdGlvbiBiKCkgeyAvLyArKysrKysrKw0KICBjb25zb2xlLmxvZygnYicpDQp9DQphKCkNCg0KbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlcywgcmVqKXsNCiAgY29uc29sZS5sb2coJ2NyZWF0ZSBwcm9taXNlJykNCiAgcmVzKCkNCn0pLnRoZW4oKCk9PnsNCiAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lcigpIHsNCiAgICBjb25zb2xlLmxvZygndGltZW91dCcpDQogIH0sIDApDQp9KQ0KDQpiKCkNCg0KLy8gY3JlYXRlIHByb21pc2UsIGIsIGEsIHRpbWVvdXQ%3D
// *** ------- ***







// *** ------- ***
// ### Пример 8
console.log(1)

setTimeout(() => {
  console.log(2)
  Promise.resolve().then(() => {
    console.log(3) // 3 - первый стоит в  macro
  })
})

new Promise((res, rej) => {
  console.log(4)
  res(5)
}).then(data => { // 5 - первый в очереди  в  macro
  console.log(data)

  Promise.resolve()
      .then(() => {
        console.log(6) // третья
      })
      .then(() => {
        console.log(7)  // четвертая

        setTimeout(() => {
          console.log(8)  // стоит вторым в микро
        }, 0)
      })
})

setTimeout(() => {
  console.log(9)
})

console.log(10)
// 1, 4, 10, 5, 6, 7, 2, 3, 9, 8
// https://www.jsv9000.app/?code=Y29uc29sZS5sb2coMSkNCg0Kc2V0VGltZW91dCgoKSA9PiB7DQogIGNvbnNvbGUubG9nKDIpDQogICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gew0KICAgICAgICAgICAgY29uc29sZS5sb2coMykNCiAgICAgICAgfSkNCiAgICB9KQ0KbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7DQogICAgICAgIGNvbnNvbGUubG9nKDQpDQogICAgICAgIHJlcyg1KQ0KfSkudGhlbihkYXRhID0%2BIHsgDQogICAgICAgIGNvbnNvbGUubG9nKGRhdGEpDQogICAgICAgIFByb21pc2UucmVzb2x2ZSgpDQogICAgICAgIC50aGVuKCgpID0%2BIHsNCiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg2KSANCiAgICAgICAgICAgIH0pDQogICAgICAgIC50aGVuKCgpID0%2BIHsNCiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg3KQ0KICAgICAgICAgICAgICAgIA0KICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gew0KICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coOCkgIA0KICAgICAgICAgICAgICAgIH0sIDApDQogICAgICAgIH0pDQogICAgfSkNCiAgICANCiAgICBzZXRUaW1lb3V0KCgpID0%2BIHsNCiAgICAgICAgY29uc29sZS5sb2coOSkNCiAgICB9KQ0KICAgIA0KICAgDQpjb25zb2xlLmxvZygxMCkNCg0KICAgICAgICAgICAgICAgIA0KICAgICAgICANCg0KLy8gMSwgNCwgMTAsIDUsIDYsIDcsIDIsIDMsIDksIDg%3D
// *** ------- ***







// *** ------- ***
// ### Пример 9
setTimeout(() => {
  console.log('1')
}, 0)

setTimeout(() => {
  console.log('2')
}, 1000)

new Promise(function (res, rej) {
  console.log('3')
  res()
  console.log('4')
}).then(() => {
  console.log('5')
})

console.log('6')

async function test1() {
  console.log('7')
  await test2()
  console.log('8') // ЗАПОМНИ !!! Это как-бы попадает в.then ---> следовательно попадает в Micro Task
}

async function test2() {
  console.log('9')
}

test1()

console.log('10')
//  3 4 6 7 9 10 5 8 1 2
// *** ------- ***







// *** ------- ***
// ### Пример 10
async function first() { // сам async function выполняется СИНХРОННО. Мы просто говорим словом async, что в ней могут быть какие-то асинхронные действия
  console.log(9)
  await Promise.resolve(2).then(r => console.log(r)) // а вот если мы в ней что-то за-await(им), то это что-то будет выполняться асинхронно. Будь то несколько строк кода равно будет считаться как попало в .then
  console.log(0)
  await Promise.resolve(3).then(r => console.log(r))
}

async function second() {
  console.log(10)
  await Promise.resolve(4).then(r => console.log(r))
  console.log(11)
  await Promise.resolve(5).then(r => console.log(r))
}

first()
second()

const promises = Promise.resolve('new Promise')
promises.then(str => console.log(str))
// 9 10 2 4 new Promise 0 11 3 5
// *** ------- ***







// *** ------- ***
// ### Пример 11
//
// *** ------- ***



