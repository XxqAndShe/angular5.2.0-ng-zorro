import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { SafetyRoutingModule } from "./safety-routing.module";
import { SafetyComponent } from "./safety.component";
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        FormsModule,
        SafetyRoutingModule
    ],
    declarations: [
        LoginComponent,
        SafetyComponent
    ]
})

export class SafetyModule {}