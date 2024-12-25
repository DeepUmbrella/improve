import { Routes } from '@angular/router'

import {
    HomePageComponent,
    UserPageComponent,
    UserDetailPageComponent,
    NotFoundPageComponent,
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
