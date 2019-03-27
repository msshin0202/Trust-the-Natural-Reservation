import { Component, OnInit } from '@angular/core';
import { CheckInService } from '../../services/checkin.service.service';

@Component({
  selector: 'app-emplanding',
  templateUrl: './emplanding.component.html',
  styleUrls: ['./emplanding.component.scss']
})
export class EmplandingComponent implements OnInit {

  constructor(private checkInService: CheckInService) { }

  ngOnInit() {
  }

  checkIn(event) {
    event.preventDefault();
    const target = event.target;
    const rid = target.querySelector("#rid");
  
    this.checkInService.checkIn(rid).subscribe(data => {
      console.log(data);
    });
  }

}
