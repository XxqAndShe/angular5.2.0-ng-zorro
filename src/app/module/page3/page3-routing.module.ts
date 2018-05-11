import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { Page3Component } from './page3.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';

const Page3Routes: Routes = [
    {
       path:'',
       component: Page3Component,
       children: [
           {
            path: 'child1',
            component: Level1Component
           },
           {
            path: 'child2',
            component: Level2Component
           },
           {
            path: 'child3',
            component: Level3Component
           },
           { path: '',   redirectTo: 'sub1', pathMatch: 'full' }  
       ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(Page3Routes)
    ],
    exports: [
        RouterModule 
    ]
})
export class Page3RoutesModule {}