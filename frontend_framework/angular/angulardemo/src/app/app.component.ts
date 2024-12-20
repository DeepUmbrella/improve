import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TodoList } from '../components/TodoList/todo-list'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TodoList],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'Hello Angular!'
}