import { NasaService } from './../services/nasa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {

  response:any;

  constructor(private service:NasaService) { }

  ngOnInit(): void {
    this.service.get().subscribe({
      next: data => this.response = data
    });
  }

}
