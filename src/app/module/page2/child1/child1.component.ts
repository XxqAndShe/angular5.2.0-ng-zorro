import { Component,OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
     templateUrl: './child1.component.html',
     styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
    constructor (public _message: NzMessageService) {

    }

    ngOnInit () {
       this.setInfo('这是page2')
    }

    setInfo (params) {
        this._message.info(params)
    }   
}