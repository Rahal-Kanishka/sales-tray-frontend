import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sales-wrapper',
  templateUrl: './sales-wrapper.component.html',
  styleUrls: ['./sales-wrapper.component.scss']
})
export class SalesWrapperComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.success('Hey Guest User', 'Welcome to Sales Tray');
  }

}
