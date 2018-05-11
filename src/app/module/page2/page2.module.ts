import { NgModule } from '@angular/core';

import { Page2RoutesModule } from './page2-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Page2Component } from './page2.component'

@NgModule({
    imports: [
        Page2RoutesModule
    ],
    providers: [
    ],
    declarations: [Page2Component,Child1Component,Child2Component,Child3Component]
})
export class Page2Module {}