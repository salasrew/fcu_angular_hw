import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  inputCash: string = '0';
  selectedmethod: string = '3';
  result: string = '轉換結果為:';

  constructor() { }

  ngOnInit(): void {
  }

}
