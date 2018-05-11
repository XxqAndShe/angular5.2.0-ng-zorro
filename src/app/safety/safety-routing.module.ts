import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { NgZorroAntdModule } from "ng-zorro-antd";

import { LoginComponent } from './login/login.component';

const SatetyRouting: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(SatetyRouting),
        NgZorroAntdModule // 引入佐罗模块
    ],
    exports: [
        RouterModule
    ]
})

export class SafetyRoutingModule {}