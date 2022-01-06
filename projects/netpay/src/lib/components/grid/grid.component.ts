import { Component, Input, OnInit } from '@angular/core';
import '@angular/localize/init';
import { responseReportData } from '../../constants/employee';
import { DatePipe, formatCurrency, registerLocaleData } from '@angular/common';
import { IGridFields } from './../../interfaces/gridFields.interface';
import es from '@angular/common/locales/es';
registerLocaleData(es);
declare var $: any;

@Component({
  selector: 'np-grid',
  template: `
  <div class="row width-r margin-table mt-3 ml-3">
    <div class="row np-top-section__main-table kendoResponsive" style="height: 100%;">
      <kendo-grid
        [kendoGridBinding]="elements"
        [pageSize]="10"
        [pageable]="{
          pageSizes: [10, 25, 50, 100]
        }"
        [sortable]="true"
        [filterable]="true"
        [resizable]="true"
        [selectable]="true"
        [navigable]="true"
        kendoGridSelectBy="id"
        class="np__table shadow-none" style="width: 100%;"
        >
          <kendo-grid-column field="identifier" title="Id Contrato" [headerClass]="{'myClass': true}" [width]="120">
          </kendo-grid-column>
          <kendo-grid-column field="firstName" title="Nombre de cliente" [width]="225">
            <ng-template kendoGridCellTemplate let-dataItem>
              {{dataItem.firstName+ ' ' +dataItem.lastName}}
            </ng-template>
          </kendo-grid-column>
          <kendo-grid-column field="phone" title="Teléfono" [width]="125">
          </kendo-grid-column>
          <kendo-grid-column field="email" title="Correo electrónico" [width]="245">
          </kendo-grid-column>
          <kendo-grid-column field="lastFourDigits" title="Tarjeta" [width]="145">
            <ng-template kendoGridCellTemplate let-dataItem>
              <ng-container *ngIf="dataItem.lastFourDigits !== null && dataItem.cardBrand !== null">
                {{dataItem.cardPrefix + "******" + dataItem.lastFourDigits}}
                <!-- <img [src]="brand_icon(dataItem.cardBrand)"> -->
              </ng-container>
            </ng-template>
          </kendo-grid-column>
          <kendo-grid-column field="plans" title="Planes" [width]="105">
            <ng-template kendoGridCellTemplate let-dataItem>
              {{ dataItem.subscriptions.length }}
            </ng-template>
          </kendo-grid-column>
          <kendo-grid-column field="createdAt" title="Fecha de creación" [width]="115">
            <ng-template kendoGridCellTemplate let-dataItem>
              {{ dataItem.createdAtFormat }}
            </ng-template>
          </kendo-grid-column>
          <!-- FIN FILTROS -->
                      <!-- INICIO DE BOTON DE ACCIONES -->
        <kendo-grid-column title="Acciones" [width]="90">
          <ng-template kendoGridCellTemplate let-dataItem>
            <div class="btn-group dropleft" role="group">
              <button id="actionButton" type="button" class="btn btn-default np-dropdown-ico shadow-none"
                data-toggle="dropdown-menu" aria-haspopup="true" aria-expanded="false">
                <!-- <img src="./../../assets/styles/img/elipsis-solid.svg"> acciones -->
                <i class="fa fa-ellipsis-v fa-sm"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a id="edit-client" type="button" class="btn btn-link btn-sm btn-grid dropdown-menu--black"
                  data-toggle="modal" data-target="#editClientModal" (click)="editRecurrenceClient(dataItem)">
                  <i class="NP-icon-pen dropdown-menu--black--icon" aria-hidden="true"></i> Editar cliente</a>
                <a id="remove-client" type="button" class="btn btn-link btn-sm btn-grid dropdown-menu--red"
                  (click)="showConfirmation(dataItem.id, dataItem.firstName + ' ' + dataItem.lastName, dataItem.subscriptions.length)">
                  <i class="far fa-trash-alt np__table--icon np__table--icon--red dropdown-menu--red--icon"
                    aria-hidden="true"></i> Eliminar cliente</a>
              </div>
            </div>
          </ng-template>
        </kendo-grid-column>
        <!-- FIN DE BOTON DE ACCIONES -->

        <kendo-grid-messages noRecords="No hay datos disponibles." pagerFirstPage="Ir a la primera página"
          pagerPreviousPage="Ir a la página anterior" pagerNextPage="Ir a la página siguiente"
          pagerLastPage="Ir a la última página" pagerPage="Página" pagerOf="de" pagerItems="ítems"
          pagerItemsPerPage="ítems por página" filter="Filter" filterEqOperator="Es igual a"
          filterNotEqOperator="No es igual a" filterIsNullOperator="Es nulo" filterIsNotNullOperator="No es nulo"
          filterIsEmptyOperator="Está vacío" filterIsNotEmptyOperator="No está vacío"
          filterStartsWithOperator="Comienza con" filterContainsOperator="Contiene"
          filterNotContainsOperator="No contiene" filterEndsWithOperator="Termina en"
          filterGteOperator="Es mayor o igual que" filterGtOperator="Es mayor que"
          filterLteOperator="Es menor o igual que" filterLtOperator="Es menor o igual que" filterIsTrue="Sí"
          filterIsFalse="No">
        </kendo-grid-messages>
      </kendo-grid>
    </div>
  </div>
  `,
  styles: [``]
})
export class GridComponent implements OnInit {

  @Input() gridData?: Array<IGridFields> = [];
  elements: any = [];
  successMessageComponent: any;
  parentMessage: any;
  deleteId: any;

  constructor() {
  }

  public ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.elements= this.gridData;

    this.elements.forEach((element: any) => {
      if (element.createdAt) {
        element.createdAtFormat = new DatePipe('es-MX').transform(element.createdAt, 'dd/MM/yyyy');
      }
      element.lastFourDigits = null;
      element.cardBrand = null;
      if (element.paymentSources.length > 0) {
        element.lastFourDigits = element.paymentSources[0].card.lastFourDigits;
        element.cardPrefix = element.paymentSources[0].card.cardPrefix;
        element.cardBrand = element.paymentSources[0].card.brand;
      }

    });

    // this.gridData = this.elements;
  }

  editRecurrenceClient(dataItem: any) {
    this.parentMessage = dataItem;
    this.successMessageComponent = {
      component: 'client',
      action: 'edit',
      message: '¡Cliente modificado con éxito!',
      btnOpenDataTarget: null,
      btnLabel: ''
    };
    // $('#editClientModal').modal('hide');
  }

  showConfirmation(id: any, name: any, subscriptions: any) {
    /*if (subscriptions > 0) {
      $('').modal('show');
      this.deleteId = id;
    }*/
    // $('#staticBackdrop').modal('show');
    this.deleteId = id;
  }

  toCurrency(item: any){
    let value = formatCurrency(item, 'en-US', '$ ')
    return value;
  }

}
