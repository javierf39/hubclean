import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-btn-arriba',
  template: `
  <a class="scroll-top">
    <i class="bi bi-arrow-up arriba"></i>
</a>
  `,
  styleUrls: ['./btn-arriba.component.scss']
})
export class BtnArribaComponent implements OnInit {

  windowScrolled!:boolean;

  constructor() {}

  ngOnInit(): void {
    $(window).scroll(function(){
      if ($(window).scrollTop() > 400) {
          $('.scroll-top').fadeIn('slow');
      } else {
          $('.scroll-top').fadeOut('slow');
      }
  });
  $('.scroll-top').click(function(event:any) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 600);
  });
  }
}