import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRouting: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'module',loadChildren: 'app/module/page.module#PageModule'
            },
            {
                path: 'login',loadChildren: 'app/safety/safety.module#SafetyModule'
            },
            {
                path: '**',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRouting)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}