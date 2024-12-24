import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'UserPage',
    standalone: true,
    imports: [RouterLink],
    template: `
        <div>
            <a routerLink="/" routerLinkActive="router-link-active"
                >back Home</a
            >
            <h1 style="background-color: red;color:black; ">
                this is user information page
            </h1>
        </div>
    `,
})
export class UserPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
