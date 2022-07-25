import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

 @Input() input?: string;
 @Input() method?: string;
 @Input() result: string = "轉換結果為:";

  constructor() { }

  ngOnInit(): void {
  }
  cToF(input:number ): number
  {
    return input * (9/5) +32 ;
  }

  fToC(input:number ): number
  {
      return (5/9)*(input-32);
  }


  Tw2US(input:number ): number
  {
      return input/30 ;
  }

  Us2tw(input:number ): number
  {
    return input * 30 ;
  }

  Convert(): void
  {
    if(this.method=='1')
    {                
      this.result = "轉換結果為:"+this.cToF(Number(this.input))+"度華氏";

    }
    else if(this.method=='2')
    {
      this.result  = "轉換結果為:"+this.fToC(Number(this.input))+"度攝氏";
    }

    else if(this.method=='3')
    {                
      this.result = "轉換結果為:"+this.Tw2US(Number(this.input))+"美金";

    }
    else if(this.method=='4')
    {
      this.result  = "轉換結果為:"+this.Us2tw(Number(this.input))+"台幣";
    }
  }



}
