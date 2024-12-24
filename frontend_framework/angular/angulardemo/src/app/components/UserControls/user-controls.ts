import { Component, OnInit } from '@angular/core'

@Component({
    standalone: true,
    imports: [],
    selector: 'user-controls',
    template: `
        @if (isAdmin) {
        <button>Erase data base</button>
        }@else {
        <p>You are not authorized!</p>
        }
    `,
})
export class UserControlsComponent implements OnInit {
    isAdmin = true
    constructor() {}

    ngOnInit() {}
}
