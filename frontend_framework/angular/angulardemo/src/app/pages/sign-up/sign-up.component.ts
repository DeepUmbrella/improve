import { Component } from '@angular/core'
import { SignFormComponent } from '@components'

@Component({
    selector: 'app-sign-up',
    imports: [SignFormComponent],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {}
