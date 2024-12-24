import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    standalone: true,
    imports: [RouterLink],
    selector: 'NotFound,404',
    templateUrl: './not-found.component.html',
})
export class NotFoundPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
