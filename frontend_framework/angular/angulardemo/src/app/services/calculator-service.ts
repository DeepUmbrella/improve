import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class CalculatorService {
    constructor() {}

    add(pre: number, next: number) {
        return pre + next
    }
}
