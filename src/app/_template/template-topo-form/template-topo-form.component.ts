import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToPo } from      '../../_interface/todo';
import { EventPing } from '../../_interface/eventping';

@Component({
  selector: 'app-template-topo-form',
  templateUrl: './template-topo-form.component.html',
  styleUrls: ['./template-topo-form.component.sass']
})

export class TemplateTopoFormComponent implements OnInit {

    public ToPo$: ToPo;
    @Output() ping: EventEmitter<ToPo> = new EventEmitter<ToPo>();

    constructor() {
        this.ToPo$ = {
            id: undefined,
            label: undefined,
            status: false,
            position: undefined
        };
    }

    ngOnInit() {
    }

    public createToPo(event?: any): void{
        this.ping.emit(this.ToPo$);
        this.ToPo$ = {
            id: undefined,
            label: undefined,
            status: false,
            position: undefined
        };
    }


}
