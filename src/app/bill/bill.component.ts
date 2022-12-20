import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bill : any;
  customerId !: number;
  constructor(private http:HttpClient, private router : Router, private route : ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8888/BILLING-SERVICE/bills").subscribe({
      next : (data) =>{
        this.bill=data;
      },
      error : (err) =>{}
    });
  }

  getBilldetails(b: any) {
    this.router.navigateByUrl( "/bill-details/"+b.id);
  }
}
