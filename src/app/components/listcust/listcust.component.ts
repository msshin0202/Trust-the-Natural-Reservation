import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ListcustService } from '../../services/listcust.service';

@Component({
  selector: 'app-listcust',
  templateUrl: './listcust.component.html',
  styleUrls: ['./listcust.component.scss']
})

export class ListcustComponent implements OnInit {
  baseUrl = 'http://localhost:3000/api';
  customers = [];
  date = "";
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private listcust: ListcustService) { }

  ngOnInit() {
  }

  chooseDate(event){
    event.preventDefault();
    const target = event.target;
    this.date = target.querySelector('#checkInDate').value;
    this.listcust.getListCust(this.date).subscribe(data => {
    this.customers = data;});
  }

  showList(){
    var y = document.getElementById("list");

    y.style.display = "block";



  }

}
