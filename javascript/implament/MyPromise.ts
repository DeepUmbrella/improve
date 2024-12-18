export type MyPromiseState = {
    PENDING: 'pending'
    FULFILL: 'fulfill'
    REJECT: 'reject'
}

type Resolver = (value: any) => void
type Rejecter = (reason?: any) => void
type FulfilledFunc = (value?: any) => void
type RejectedFunc = (reason?: any) => void

export type Executor = (resolve: Resolver, reject: Rejecter) => void

const PROMISE_STATUS: MyPromiseState = {
    PENDING: 'pending',
    FULFILL: 'fulfill',
    REJECT: 'reject',
}

class MyPromise {
    status = undefined
    value = undefined

    static resolve() {}

    static reject() {}

    static race() {}

    static all() {}

    static try() {}

    constructor(executor: Executor) {
        this.status = PROMISE_STATUS.PENDING
        const resolve = (value: any) => {
            if (this.status === PROMISE_STATUS.PENDING) {
                this.status = PROMISE_STATUS.FULFILL
                this.value = value
            }
        }
        const reject = (reason: any) => {
            if (this.status === PROMISE_STATUS.PENDING) {
                this.status = PROMISE_STATUS.REJECT
                this.value = reason
            }
        }
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled: FulfilledFunc, onRejected: RejectedFunc) {
        if (this.status !== PROMISE_STATUS.PENDING) {
            this.status === PROMISE_STATUS.FULFILL
                ? onFulfilled(this.value)
                : onRejected(this.value)
        }
        return new MyPromise()
    }

    finally() {}

    catch() {}
}
