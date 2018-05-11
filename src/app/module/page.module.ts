import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgZorroAntdModule } from 'ng-zorro-antd'

import { PageRouterModule } from './page-routing.module';
import { PageComponent } from './page.component';

@NgModule({
    imports: [
        FormsModule,
        PageRouterModule,
        NgZorroAntdModule, // 注意所有的子module都需要引入佐罗
    ],
    declarations: [PageComponent],
    providers: []
})

export class PageModule {}