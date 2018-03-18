import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exception-handlew',
  templateUrl: './exception-handler.component.html',
  styleUrls: ['./exception-handler.component.css']
})
export class ExceptionHandlerComponent implements OnInit {


  exceptionType:string='Unknown';

  constructor() { }

  ngOnInit() {
  }

}
