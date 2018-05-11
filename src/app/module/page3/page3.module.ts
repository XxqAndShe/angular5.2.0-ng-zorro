import { NgModule } from '@angular/core';

import { Page3RoutesModule } from './page3-routing.module';
import { Page3Component } from './page3.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';

@NgModule({
    imports: [
        Page3RoutesModule
    ],
    providers: [
    ],
    declarations: [Page3Component,Level1Component,Level2Component,Level3Component]
})
export class Page3Module {}