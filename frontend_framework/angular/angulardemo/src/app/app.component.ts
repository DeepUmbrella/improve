import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TodoList } from '../components/TodoList/todo-list'
import { UserProfile } from '../components/UserProfile/user-profile'
import { TextTransformer } from '../components/TextTransformer/text-transformer'
import { Receipt } from '../components/Receipt/index'
import { Sum } from '../components/SumExample/sum'
import { Defer } from '../components/Defer/defer'
import { OptImage } from '../components/OptImage/opt_image'

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        TodoList,
        UserProfile,
        TextTransformer,
        Receipt,
        Sum,
        Defer,
        OptImage,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'Hello Angular!'
}
