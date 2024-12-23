import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    standalone: true,
    imports: [RouterLink],
    selector: 'NotFound',
    templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
