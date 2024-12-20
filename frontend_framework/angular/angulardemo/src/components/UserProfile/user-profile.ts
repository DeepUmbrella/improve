import { Component, OnInit } from '@angular/core'
import { UserControls } from '../UserControls/user-controls'

@Component({
    standalone: true,
    imports: [UserControls],
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
})
export class UserProfile implements OnInit {
    constructor() {}

    ngOnInit() {}
}
