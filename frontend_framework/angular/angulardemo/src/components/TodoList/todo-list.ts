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
    assigned = signal('')
    todoList = signal(
        new Array(5).fill('todo list').map((_, index) => `todo list ${index}`)
    )

    todoListTodo = computed(() => {
        console.log('todo list updating')
        return this.todoList().map((item) => `this is the ${item} task`)
    })

    updateTodoList() {
        this.todoList.update((originalArr) => [
            ...originalArr,
            'todo list most',
            'todo list lost',
        ])
    }
    updateAssigned(user: string) {
        this.assigned.set(user)
    }
}
