import { Component, OnInit } from '@angular/core';
import { ToPo } from      '../_interface/todo';
import { EventPing } from '../_interface/eventping';
import { DataService } from '../_service/data.service';
import { Subscription } from 'rxjs';

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


    constructor(
        public _dataService: DataService
    ) {
        this.ToPoShow = true;
        this.ToPoDoneShow = false;
        this.$topos = [];
        this.$toposdone = [];
        this.loadData();
    }

    ngOnInit() {
    }

    public loadData(): void{
        //array löschen
        this.$topos = [];
        this.$toposdone = [];
        this._dataService.getToPo().subscribe((data: ToPo[]) => {
            this.$topos = data;
        }, error => {
            console.log(`%cERROR: ${error.message}`, `color: red;`);
        });
    }



    public create(event: ToPo): void {
        event.position = this.$topos.length+ 1;
        this._dataService.postToPo(event).subscribe((data: ToPo) => {
            //console.log('push erstellt');
            this.$topos.push(data);
        }, error => {
            console.log(`%cERROR: ${error.message}`, `color: red;`);
        });
    }

    public update(event: EventPing): void {
        console.log(event);
        if ('check' === event.label){
            //console.log("${event.label}" + 'wurde getriggert. ')
            if (!event.object.status){
                this.$toposdone.splice(this.$toposdone.indexOf(event.object), 1);
                this.$topos.push(event.object);
            } else {
                 this.$topos.splice(this.$topos.indexOf(event.object), 1);
                 this.$toposdone.push(event.object);
            }
        }
        if ('delete' === event.label){
            //console.log("${event.label}" + 'wurde getriggert. ')
            if (event.object.status){
                this.$toposdone.splice(this.$toposdone.indexOf(event.object), 1);
            } else {
                 this.$topos.splice(this.$topos.indexOf(event.object), 1);
            }
        }
        if ('label' === event.label){
            console.log("event.label}" + 'wurde getriggert. ')
            if (event.object.status){
                this.$toposdone.forEach((ToPo: ToPo) => {
                    if(ToPo.id === event.object.id){
                       ToPo.label = event.object.label;
                    }
                });
                this.$topos.forEach((ToPo: ToPo) => {
                     if(ToPo.id === event.object.id){
                        ToPo.label = event.object.label;
                     }
                 });
            }
            console.log(this.$topos);
        }

    }
}
