import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

/**
 * banner图
 */ 
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls:['./banner.component.scss']
})
export class BannerComponent implements OnInit , AfterViewInit{

  @Input('data-input')
  dataInput : any ;

  viewPortCW : number ;
  viewPortCH : number ;
  bannerGuide : HTMLElement ;
  currentIndex : number = 1 ;
  
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let viewPort = this.elementRef.nativeElement.querySelector('.banner-viewport');
    this.bannerGuide = this.elementRef.nativeElement.querySelector('.banner-guide');
    this.viewPortCW = viewPort.clientWidth;
    this.viewPortCH = viewPort.clientHeight;
  }

  ngAfterViewInit(): void {
    
  }

  stepBanner(token:boolean){
    
    console.log(token);
    let bannerLength = this.dataInput.length;

    if(token){
      if(this.currentIndex < bannerLength){
        this.currentIndex ++ ;
      }else{
        this.currentIndex = 1;
      }
    }else{
      if(this.currentIndex > 1){
        this.currentIndex -- ;
      }else{
        this.currentIndex = bannerLength;
      }
    }

    this.bannerGuide.style.transform = "translate(-" + this.viewPortCW*(this.currentIndex - 1) + "px)";

  }
  

}