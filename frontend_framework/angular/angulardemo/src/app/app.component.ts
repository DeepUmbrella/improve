import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TodoList } from '../components/TodoList/todo-list'
import { UserProfile } from '../components/UserProfile/user-profile'
import { TextTransformer } from '../components/TextTransformer/text-transformer'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TodoList, UserProfile, TextTransformer],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'Hello Angular!'
}
