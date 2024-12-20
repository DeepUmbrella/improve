import { Component, Input } from '@angular/core'

@Component({
    standalone: true,
    selector: 'todo-list-item',
    templateUrl: `./todo-list-item.html`,
    styleUrl: `./todo-list-item.scss`,
})
export class TodoListItem {
    taskTitle = 'the task'
    isComplete = false

    completeTask() {
        this.isComplete = !this.isComplete
    }

    updateTitle(newTitle: string) {
        this.taskTitle = newTitle
    }
}
