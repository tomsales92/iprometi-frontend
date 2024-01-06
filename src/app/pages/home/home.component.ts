import { DatePipe } from '@angular/common';
import { Component, ElementRef, LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/pt';
import {  ColorScheme, Dados, Dashboard } from '../../models/dashboard/dashboard';
import { GetDataService } from '../../services/getData/get-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: ​​true,
  imports: [NgxChartsModule, NgbModule],
  providers: [{provide: LOCALE_ID, useValue: 'pt' }]

 
})
export class HomeComponent {
  dataAtual: Date = new Date();
  disableButton = false;
  public diasRealizados: number;
  public meta: number;
  public dados: Array<Dados>
  public customColors: Array<ColorScheme>
  
  constructor(private _getDataService: GetDataService, private modalService: NgbModal) {
    this.dataAtual = new Date();
  }

  ngOnInit(){
    this.getData();
  }



  private getData() {
    this._getDataService.getDashboard().subscribe((value: Dashboard) => {
      this.meta = value.meta;
      this.diasRealizados = value.diasRealizados;
      this.dados = value.dados;
      this.customColors = value.colorScheme;
      this.verifyDisableButton(); 

    });
  }

  registraMeta() {
    this.fecharModal();
    this.diasRealizados++; // Incrementa this.diasRealizados em 1
    this._getDataService.updateData(this.diasRealizados).subscribe(value => {
      this.getData();
    })

    this.verifyDisableButton(); 
  }

  private verifyDisableButton() {
    if (this.diasRealizados === this.meta) {
      this.disableButton = true;
    }
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'custom-modal' }).result.then(
      (result) => {
        // Aqui você pode lidar com a ação de fechamento do modal, se necessário
        console.log(`Modal fechado com: ${result}`);
      },
      (reason) => {
        // Aqui você pode lidar com o motivo pelo qual o modal foi fechado, se necessário
        console.log(`Modal dismiss reason: ${reason}`);
      }
    );
  }

  fecharModal() {
    this.modalService.dismissAll(); // Fecha todos os modais abertos
  }
}
