import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'UserPage',
    standalone: true,
    imports: [FormsModule],
    template: `
        <div>
            <h1>this is user information page</h1>
            <p>Username: {{ username }}</p>
            <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
            <label for="framework">
                Favorite framework :
                <input
                    id="framework"
                    type="text"
                    [(ngModel)]="favoriteFramework"
                />
            </label>
            <button (click)="showFramework()">Show Framework</button>
        </div>
    `,
    styleUrl: './user.scss',
})
export class UserPageComponent implements OnInit {
    username = 'youngTech'
    favoriteFramework = ''

    constructor() {}

    showFramework() {
        alert(this.favoriteFramework)
    }

    ngOnInit() {}
}
