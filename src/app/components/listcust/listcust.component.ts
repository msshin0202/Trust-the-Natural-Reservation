import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ListcustService } from '../../services/listcust.service';

@Component({
  selector: 'app-listcust',
  templateUrl: './listcust.component.html',
  styleUrls: ['./listcust.component.scss']
})
export class ListcustComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private listcust: ListcustService) { }

  ngOnInit() {
  }

  chooseDate(event){
    event.preventDefault();
    const target = event.target;
    const date = target.querySelector('#checkInDate').value;
    this.listcust.getListCust(date).subscribe(data => {
      console.log(data);})
  }

}
