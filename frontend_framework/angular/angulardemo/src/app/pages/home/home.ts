import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Defer } from '../../../components/Defer/defer'
import { OptImage } from '../../../components/OptImage/opt_image'
import { Receipt } from '../../../components/Receipt'
import { Sum } from '../../../components/SumExample/sum'
import { TextTransformer } from '../../../components/TextTransformer/text-transformer'
import { TodoList } from '../../../components/TodoList/todo-list'
import { UserProfile } from '../../../components/UserProfile/user-profile'

@Component({
    standalone: true,
    selector: 'HomePage',
    templateUrl: './home.html',
    imports: [
        RouterLink,
        TodoList,
        UserProfile,
        TextTransformer,
        Receipt,
        Sum,
        Defer,
        OptImage,
    ],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
