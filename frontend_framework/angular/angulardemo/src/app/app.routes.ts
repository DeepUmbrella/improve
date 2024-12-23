import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home'
import { UserComponent } from './pages/user/user'
import { NotFoundComponent } from './not-found.component'
import { UserDetailComponent } from './pages/user/user-detail'

export const routes: Routes = [
    {
        path: '',
        title: 'App Home page ',
        component: HomeComponent,
    },
    {
        path: 'user',
        title: 'App User page',
        component: UserComponent,
    },
    {
        path: 'user/:user-id',
        title: 'App User page',
        component: UserDetailComponent,
    },

    {
        path: '**',
        title: '404 Not Found Page',
        component: NotFoundComponent,
    },
]
