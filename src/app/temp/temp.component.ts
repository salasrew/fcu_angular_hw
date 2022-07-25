import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  inputTemp: string = '0';
  selectedmethod: string = '1';
  result: string = '轉換結果為:';


  constructor() { }

  ngOnInit(): void {
  }

}

