import { Component, LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/pt';
import {  ColorScheme, Dashboard, Data } from '../../models/dashboard/dashboard';
import { GetDataService } from '../../services/getData/get-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: ​​true,
  imports: [NgxChartsModule, NgbModule],
  providers: [{provide: LOCALE_ID, useValue: 'pt' }]

 
})
export class HomeComponent {
  public currentDate: Date = new Date();
  public disableButton = false;
  public accomplished: number;
  public goal: number;
  public data: Array<Data>
  public customColors: Array<ColorScheme>
  
  constructor(private _getDataService: GetDataService, private modalService: NgbModal) {
    this.currentDate = new Date();
  }

  ngOnInit(){
    this.getData();
  }

  private getData() {
    this._getDataService.getDashboard().subscribe((value: Dashboard) => {
      this.goal = value.goal;
      this.accomplished = value.accomplished;
      this.data = value.data;
      this.customColors = value.colorScheme;
      this.verifyDisableButton(); 

    });
  }

  registraMeta() {
    this.fecharModal();
    this._getDataService.updateData().subscribe(value => {
      this.getData();
    })

    this.verifyDisableButton(); 
  }

  private verifyDisableButton() {
    if (this.accomplished === this.goal) {
      this.disableButton = true;
    }
  }

  public openModal (content: any) {
    this.modalService.open(content, { windowClass: 'custom-modal' }).result.then(
      (result) => {
        console.log(`Modal fechado com: ${result}`);
      },
      (reason) => {
        console.log(`Modal dismiss reason: ${reason}`);
      }
    );
  }

  fecharModal() {
    this.modalService.dismissAll(); // Fecha todos os modais abertos
  }
}
