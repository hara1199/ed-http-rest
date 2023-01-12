import { NasaService } from './../services/nasa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {

  response: any;
  loading = false;
  message = '';


  constructor(private service: NasaService) { }

  ngOnInit(): void {
    // this.service.get().subscribe({
    //   next: data => this.response = data
    // });
  }

  makeRequest() {
    this.loading = true;
    this.service.get().subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });

  }

}
