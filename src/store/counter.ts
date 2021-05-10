import {makeAutoObservable} from 'mobx'

class Counter {
    counter: number = 0
    totalValue: number = 22

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.counter++
    }

    decrease() {
        this.counter--
    }

    get total() {
        return this.totalValue + this.counter
    }
}

export default new Counter()