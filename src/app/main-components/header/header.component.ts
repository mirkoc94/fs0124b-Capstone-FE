import { Component, HostListener, OnInit, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../Models/i-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  user: IUser | undefined;

  //OFFCANVAS
  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  //LOGOUT

  constructor(private authSvc:AuthService, private router: Router){}

  logout(){
    this.authSvc.logout()
  }

  //LOGIN
  isUserLoggedIn:boolean = false


  //HEADER
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollOffset > 100;  // Modifica questa altezza secondo le tue necessità
  }

  ngOnInit(){

    this.authSvc.isLoggedIn$.subscribe(data => {
      this.isUserLoggedIn = data;
    })

  }

  goToCart() {
    this.router.navigate(['cart']);
  }

}
