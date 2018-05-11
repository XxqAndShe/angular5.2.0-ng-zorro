import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PageComponent } from './page.component'

const PageRouting: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path:'page1',
                loadChildren: './page1/page1.module#Page1Module'
            },
            {
                path:'page2',
                loadChildren: './page2/page2.module#Page2Module'
            },
            {
                path:'page3',
                loadChildren: './page3/page3.module#Page3Module'
            },
            {
                path: '**',
                redirectTo: 'page1',
                pathMatch: 'full'
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(PageRouting)
    ],
    exports: [
        RouterModule
    ]
})

export class PageRouterModule {}