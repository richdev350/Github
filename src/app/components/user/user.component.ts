import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userName = 'Sivasankar5366210433';

  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToRepoPage() {
    if (this.userName) {
      this.route.navigateByUrl(`/repositories/${this.userName}`);
    } else {
      this.route.navigateByUrl(`/repositories/Sivasankar5366210433`);
    }
  }
}
