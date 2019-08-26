import { Component, OnInit } from '@angular/core';
import { ToPo } from '../interface/todo';
import { EventPing } from '../interface/eventping';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

    public ToPoShow: boolean;
    public ToPoDoneShow: boolean;
    public $topos: ToPo[];
    public $toposdone: ToPo[];


    constructor() {
        this.ToPoShow = true;
        this.ToPoDoneShow = false;
        this.$topos = [
            {
                id: 0,
                label: 'test',
                status: false,
                position : 1
            },
            {
                id: 1,
                label: 'test_333',
                status: false,
                position : 2
            }
        ];
    }

    ngOnInit() {
    }

    public update(event: EventPing): viod {
        if (check === event.label){
       //console.log(''%c"${event.label}-Event" wurde getriggert. ',' color: green')
        }
    }

}
