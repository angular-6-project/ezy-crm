import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { ConstantPool } from '@angular/compiler';

import { LoginComponent } from '../../views/login/login.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor() {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  appLogout() {
    window.localStorage.removeItem('mean-token');
    window.localStorage.removeItem('current-user');
    location.reload();
  }
}
