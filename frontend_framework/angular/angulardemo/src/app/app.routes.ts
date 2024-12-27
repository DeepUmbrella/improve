import { Routes } from '@angular/router'

import {
    HomePageComponent,
    UserPageComponent,
    UserDetailPageComponent,
    NotFoundPageComponent,
    SignInComponent,
    SignUpComponent,
} from '@pages'

export const routes: Routes = [
    {
        path: '',
        title: 'App Home page ',
        component: HomePageComponent,
    },
    {
        path: 'user',
        title: 'App User page',
        component: UserPageComponent,
    },
    {
        path: 'signin',
        title: 'App Sign In',
        component: SignInComponent,
    },
    {
        path: 'signup',
        title: 'App Sign In',
        component: SignUpComponent,
    },
    {
        path: 'user/:user-id',
        title: 'App User page',
        component: UserDetailPageComponent,
    },
    {
        path: '**',
        title: '404 Not Found Page',
        component: NotFoundPageComponent,
    },
]
