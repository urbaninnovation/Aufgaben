import { Component, OnInit } from '@angular/core';
import { ToPo } from '../../_interface/todo';

@Component({
  selector: 'app-template-topo-form',
  templateUrl: './template-topo-form.component.html',
  styleUrls: ['./template-topo-form.component.sass']
})
export class TemplateTopoFormComponent implements OnInit {

    public ToPo$: ToPo;

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
        console.log(this.ToPo$)
        this.ToPo$ = {
            id: undefined,
            label: undefined,
            status: false,
            position: undefined
        };
    }


}
