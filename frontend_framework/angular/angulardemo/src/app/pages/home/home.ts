import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import {
    Receipt,
    TodoList,
    TextTransformer,
    UserProfileComponent,
    Sum,
    Defer,
    OptImage,
} from '@components'

@Component({
    standalone: true,
    selector: 'HomePage',
    templateUrl: './home.html',
    styleUrl: './home-page.component.scss',
    imports: [
        RouterLink,
        TodoList,
        UserProfileComponent,
        TextTransformer,
        Receipt,
        Sum,
        Defer,
        OptImage,
    ],
})
export class HomePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
