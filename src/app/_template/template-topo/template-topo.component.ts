import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ToPo } from '../../_interface/todo';
import { EventPing } from '../../_interface/eventping'

@Component({
  selector: 'app-template-topo',
  templateUrl: './template-topo.component.html',
  styleUrls: ['./template-topo.component.sass']
})
export class TemplateTopoComponent implements OnInit {

    @Input() ToPo$: ToPo;
    @Output() ping: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    public changeCheck(event?: any): void{
        this.ToPo$.status = !this.ToPo$.status;
        const eventObject: EventPing ={
            label: 'check',
            object: this.ToPo$
        };
        this.ping.emit(eventObject);
        console.log(this.ToPo$.status);
    }

    public changeLabel(event?: any): void{
        console.log(this.ToPo$.label);
    }

    public deleteToPo(event?: any): void{
        console.log(this.ToPo$.id + 'soll gelöscht werden');
    }


}
