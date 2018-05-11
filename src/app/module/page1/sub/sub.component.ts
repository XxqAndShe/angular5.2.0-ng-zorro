import { Component,OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
     templateUrl: './sub.component.html',
     styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
    constructor (public _message: NzMessageService) {

    }

    ngOnInit () {
       this.setInfo('这是sub1')
    }

    setInfo (params) {
        this._message.info(params)
    } 
}