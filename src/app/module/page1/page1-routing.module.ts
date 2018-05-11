import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { Page1Component } from './page1.component';
import { SubComponent } from './sub/sub.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';

const Page1Routes: Routes = [
    {
       path:'',
       component: Page1Component,
       children: [
           {
            path: 'sub1',
            component: SubComponent
           },
           {
            path: 'sub2',
            component: Sub2Component
           },
           {
            path: 'sub3',
            component: Sub3Component
           },
           { path: '',   redirectTo: 'sub1', pathMatch: 'full' }  
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
export class Page1RoutesModule {}