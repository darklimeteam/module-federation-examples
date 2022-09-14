import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { RemoveUser } from 'projects/mdmf-shared/src/lib/app-state/actions/user.action';
import { UserState } from 'projects/mdmf-shared/src/lib/app-state/state/user.state';
import { Observable } from 'rxjs';
import { IUser } from '../../../../../../mdmf-shared/src/lib/app-state/models/User';

@Component({
  selector: 'app-profile-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  exportAs: 'ListUserComponent',
})
export class ListUserComponent implements OnInit {
  @Select(UserState.getUsers) users!: Observable<IUser[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  /**
   * Handle the remove user when the "Remove User" button is clicked
   * @param user: the user info
   */
  removeUser(user: IUser): void {
    this.store.dispatch(new RemoveUser(user));
  }

  /**
   * Get the users for unit testing purposes
   */
  getUsers(): IUser[] {
    return this.store.selectSnapshot<IUser[]>(state => state.users.users);
  }
}
