import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from "ngx-toastr";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  public columnDefs = [
    {field: "stockRecord.grn.item.name", headerName: "Name"}, {field: "stockRecord.grn.item.code", headerName: "Code"},
    {field: "createdOn", headerName: 'Date', valueFormatter: this.dateFormatter},
    {field: "salesRecord.retailer.name", headerName: 'Retailer'},
    {field: "soldPrice"}, {field: "soldQuantity"}, {field: "grossSale"}, {field: "discount"}
  ];
  rowData: [] = [];

  constructor(private toastrService: ToastrService, private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    this.backendService.GETRequest('/sales/all_sales_with_stock').subscribe(
      response => {
        if (response) {
          console.log('response: ', response);
          this.rowData = [];
        }
      },
      error => {
        this.toastrService.error('Could not get Sales Data with Stocks','Error occurred');
      }
    )
  }

  dateFormatter(params: any) {
    return (params && params.value) ? moment(params.value).format('MM/DD/YYYY HH:mm A') : 'Not Available';
  }


  addSale() {
    this.toastrService.success('Sale is recorded', 'Success');
  }

}
