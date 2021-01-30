import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  public isCollapsedDropdown = true;
  private userSub!: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user; // if haven't user then false else true
      console.log(!user);
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
