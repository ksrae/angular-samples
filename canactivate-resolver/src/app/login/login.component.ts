import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    console.log('login')

  }

  confirm() {
    this.appService.setLogin();
    this.router.navigate(['/'], {relativeTo: this.route.root});
  }

}
