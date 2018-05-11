import { NgModule } from '@angular/core';

import { Page1RoutesModule } from './page1-routing.module';
import { SubComponent } from './sub/sub.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';
import { Page1Component } from './page1.component'

@NgModule({
    imports: [
       Page1RoutesModule
    ],
    providers: [
    ],
    declarations: [Page1Component,SubComponent,Sub2Component,Sub3Component]
})
export class Page1Module {}