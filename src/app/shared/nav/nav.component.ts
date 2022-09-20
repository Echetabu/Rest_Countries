import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
isDark : boolean = false;
  constructor(@Inject(DOCUMENT) private document:  Document,private readonly renderer2: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
     
    }, 3000);
   
  }
toggleTheme(){
 
 !this.isDark ? this.renderer2.addClass(this.document.body,'dark-mode') : "";
}
}
