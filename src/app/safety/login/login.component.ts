import { Component,OnInit } from '@angular/core';
import { NzMessageService } from "ng-zorro-antd";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    constructor (public _message: NzMessageService) {

    }

    ngOnInit () {
       this.setInfo('这是登陆页面')
    }

    setInfo (params) {
        this._message.info(params)
    }
}