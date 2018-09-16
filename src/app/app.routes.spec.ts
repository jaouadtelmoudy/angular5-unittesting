import {routes} from './app.routes'
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './2-todos/todos.component';
import { HomeComponent } from './home/home.component';

describe('routes', () => {
    it('should countain a route for /users', () => {
            expect(routes).toContain({path: 'users/:id', component: UserDetailsComponent});
            expect(routes).toContain({path: 'users', component: UsersComponent});
            expect(routes).toContain({path: 'todos', component: TodosComponent});
            expect(routes).toContain({path: '', component: HomeComponent});
    })
})