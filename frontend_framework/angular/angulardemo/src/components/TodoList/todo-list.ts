import { Component, signal, computed } from '@angular/core'
import { TodoListItem } from './todo-list-item'

@Component({
    standalone: true,
    imports: [TodoListItem],
    selector: 'todo-list',
    styleUrl: './todo-list.scss',
    templateUrl: './todo-list.html',
})
export class TodoList {
    name = signal('2024.13')
    todoList = signal(new Array(5).map((_, index) => index))

    todoListTodo = computed(() => {
        console.log('todo list updating')
        return this.todoList().map((item) => `this is the ${item} task`)
    })

    updateTodoList() {
        this.todoList.update((originalArr) => [...originalArr, 9, 10])
    }
}
