import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  
  constructor(private toastr: ToastrService){   
  }

  ngOnInit(): void {
  }
  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }  
}