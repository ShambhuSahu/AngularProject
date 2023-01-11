import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appCheckNum]'
})
export class CheckNumDirective {

  constructor(private eleRef:ElementRef) { 
  }

  @HostListener('keyup') onkeyup(){
    if(this.eleRef.nativeElement.value<0 ||this.eleRef.nativeElement.value>5)
    {
this.eleRef.nativeElement.style.backgroundColor="red";
    }
  else{
this.eleRef.nativeElement.style.backgroundColor="green";  
  }
  }

}
