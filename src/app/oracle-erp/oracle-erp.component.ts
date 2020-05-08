import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oracle-erp',
  templateUrl: './oracle-erp.component.html',
  styleUrls: ['./oracle-erp.component.css']
})
export class OracleErpComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
onclick(){
  this.route.navigate(['blog']);
}
}
