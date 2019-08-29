import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ToPo } from      '../../_interface/todo';
import { EventPing } from '../../_interface/eventping';
import { DataService } from '../../_service/data.service';

@Component({
  selector: 'app-template-topo',
  templateUrl: './template-topo.component.html',
  styleUrls: ['./template-topo.component.sass']
})
export class TemplateTopoComponent implements OnInit {

    @Input() ToPo$: ToPo;
    @Output() ping: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public _dataService: DataService
    ) {}

    ngOnInit() {}

    public changeCheck(event?: any): void {
        this.ToPo$.status = !this.ToPo$.status;
        const eventObject: EventPing ={
            label: 'check',
            object: this.ToPo$
        };
        this.ping.emit(eventObject);
        console.log(this.ToPo$.status);
    }

    public changeLabel(event?: any): void {
        const eventObject: EventPing ={
            label: 'Label',
            object: this.ToPo$
        };
        this.ping.emit(eventObject);
        console.log(this.ToPo$.status);
    }

    public deleteToPo(event?: any): void {
        this._dataService.deleteToPo(this.ToPo$).subscribe((data: ToPo) => {
            //console.log('push erstellt');
            const eventObject: EventPing = {
                label: 'delete',
                object: this.ToPo$
            };
            this.ping.emit(eventObject);
        }, error => {
            console.log(`%cERROR: ${error.message}`, `color: red;`);
        });
    }


}
