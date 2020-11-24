import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { IUser } from './users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public Users: IUser[];

  public filter = '';

  constructor(
    private usersService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  sortBy(users): any {
    const sortedUsers = users;

    return sortedUsers.sort();
  }

  compare( a, b ): any {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  filterUsers(filterBy): any {
    const filteredUser = this.Users.filter(user => user.name === filterBy);

    if (filteredUser.length > 0) {
      this.Users = filteredUser;
    }

    if (filterBy === '') {
      this.fetchUsers();
    }
  }

  fetchUsers(): void {
    this.usersService.getUsers().subscribe(res => {
      this.Users = res.sort(this.compare);
    });
  }

  userOrders(userID): void {
    this.router.navigate(['users', userID, 'orders']);
  }


}
