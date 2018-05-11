import { Component,OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
     templateUrl: './level1.component.html',
     styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit{
    constructor (public _message: NzMessageService) {

    }

    ngOnInit () {
       this.setInfo('这是page3')
    }

    setInfo (params) {
        this._message.info(params)
    }    
}