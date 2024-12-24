import { Component, OnInit } from '@angular/core'
import { UserControlsComponent } from '../UserControls/user-controls'

@Component({
    standalone: true,
    imports: [UserControlsComponent],
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
