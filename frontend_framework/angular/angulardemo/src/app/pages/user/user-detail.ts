import { Component, Input, OnInit } from '@angular/core'

@Component({
    standalone: true,
    imports: [],
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
})
export class UserDetailPageComponent implements OnInit {
    @Input() userId = ''

    constructor() {}

    ngOnInit() {}
}
