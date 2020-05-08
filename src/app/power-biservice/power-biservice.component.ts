import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-power-biservice',
  templateUrl: './power-biservice.component.html',
  styleUrls: ['./power-biservice.component.css']
})
export class PowerBIserviceComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onclick(){
    this.route.navigate(['blog']);
  }
}
