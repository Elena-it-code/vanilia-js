//publisher / subscriber / observer

promise.then(function subscriber() {}) // произошло конкретное событие: резолв промиса
store.subscribe(function subscriber() {}) // произошло конкретное событие: стейт изменился
button.addEventListener('click', function subscriber() {}) // произошло конкретное событие: произошел клик
setTimeout(function subscriber() {}, 1000) // произошло конкретное событие: прошла секунда
useEffect(function subscriber() {}, []); // произошло конкретное событие: первый рендер

/*<App onClick={function subscriber() {}}/>*/



const button = {
    subscribers: { // создали некое хранилище, где будем хранить наших подписчиков
        'click': [],
        'doubleClick': [],
        'mouseIn': [],
        'mouseOut': [],
    },
    addEventListener(eventName, subscriber) { // создали метод, для того, чтобы подписаться на конкретное событие
        //this.subscribers[eventName].push[subscriber]
        this.subscribers[eventName] = this.subscribers[eventName].filter(el=> el.subscribers !== subscriber) // отфильтруем, и не пропустим того от кого хотим отписаться
    },
    removeEventListener(eventName, subscriber){
        this.subscribers[eventName].shift()
    },
    click() {
        this.subscribers['click'].forEach(subscriber => subscriber()) // логика для реализаций наших методов
    },

}


button.addEventListener('click', axios.get1)
button.addEventListener('click', axios.get2)
button.addEventListener('click', navigation.navigate('settings'))

