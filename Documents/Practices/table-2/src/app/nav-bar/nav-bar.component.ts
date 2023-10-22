import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  status: string = 'closed'
clickEvent(){
    if (this.status == 'closed') {
      this.status = 'open'
    } else {
      this.status = 'closed'
    }
    
}
}
