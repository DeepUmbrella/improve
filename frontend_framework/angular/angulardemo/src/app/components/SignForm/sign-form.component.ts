import { Component, inject, OnInit } from '@angular/core'
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    AsyncValidatorFn,
    Validators,
    AbstractControl,
} from '@angular/forms'
import { UpperCasePipe } from '@angular/common'
import { CarsService } from '@services'
import { ReversePipe } from '@pipes'

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, ReversePipe, UpperCasePipe],
    providers: [],
    selector: 'SignForm',
    templateUrl: './sign-form.component.html',
    styleUrl: './sign-from.component.scss',
})
export class SignFormComponent implements OnInit {
    customOnlineValidator: AsyncValidatorFn = (
        email: AbstractControl<string>
    ) => {
        if (email.value === '123@qq') {
            return Promise.resolve(null)
        }

        return Promise.resolve({
            email: 'email is incorrect',
        })
    }
    profileForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl(
            '',
            [Validators.required, Validators.email],
            this.customOnlineValidator
        ),
    })
    handleSubmit() {
        alert(
            this.profileForm.value.name + ' | ' + this.profileForm.value.email
        )
    }

    // carService = inject(CarsService)

    carType = ''
    constructor(private carService: CarsService) {
        this.carType = this.carService.getCars().join('⭐️⭐️')
    }

    ngOnInit() {}
}
