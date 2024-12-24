import { Component, inject, OnInit } from '@angular/core'
import { CalculatorService } from '@services/calculator-service'

@Component({
    selector: 'receipt',
    templateUrl: './index.html',
})
export class Receipt implements OnInit {
    constructor() {}
    private calculatorService = inject(CalculatorService)
    totalCost = this.calculatorService.add(5, 4)
    ngOnInit() {}
}
