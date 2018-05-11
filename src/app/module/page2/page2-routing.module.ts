import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { Page2Component } from './page2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

const Page1Routes: Routes = [
    {
       path:'',
       component: Page2Component,
       children: [
           {
            path: 'Child1',
            component: Child1Component
           },
           {
            path: 'Child2',
            component: Child2Component
           },
           {
            path: 'Child3',
            component: Child3Component
           },
           {
            path: '',  
            redirectTo: 'Child1',
            pathMatch: 'full' }  
       ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(Page1Routes)
    ],
    exports: [
        RouterModule 
    ]
})
export class Page2RoutesModule {}