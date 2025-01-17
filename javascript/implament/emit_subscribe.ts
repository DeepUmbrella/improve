type EventCenter = {
    [key: string]: Function[]
}

class MyEmitSubscribe {
    private eventCenter: EventCenter

    constructor() {
        this.eventCenter = {}
    }

    subscribe(event: string, task: Function) {
        if (typeof task !== 'function') {
            console.log('subscribe fail!')
            return
        }
        if (this.eventCenter[event]) {
            this.eventCenter[event].push(task)
            return
        }
        this.eventCenter[event] = [task]
    }

    emit(event: string, ...args: any[]) {
        const subscribes = this.eventCenter[event]

        if (!subscribes) {
            console.log('there is no one subscribe!')
            return
        }

        subscribes.forEach(task => task(...args))
    }

    emitAll(...args: any[]) {
        for (const eventStr in this.eventCenter) {
            if (
                Object.prototype.hasOwnProperty.call(this.eventCenter, eventStr)
            ) {
                this.emit(eventStr, ...args)
            }
        }
    }
}
