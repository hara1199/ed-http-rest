import { NasaService } from './../services/nasa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fakepost',
  templateUrl: './fakepost.component.html',
  styleUrls: ['./fakepost.component.scss']
})
export class FakepostComponent implements OnInit {

  response: any;

  constructor(private service: NasaService) { }

  ngOnInit(): void {
  }

  postData(){
    const data = {
      "name": "morpheus2",
      "job": "leader"
    };

    this.service.post(data).subscribe({
      next: data => this.response = data
    });
  }

}
