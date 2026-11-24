// Grand Father -> Father -> Son

class BasePage{
    constructor(name){
        this.name = name;
    }
    open() {
        console.log("[OPEN] " + this.name);
    }
}
class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}
//AuthPage extends BasePage.Therefore, AuthPage inherits the open() method.
//It also defines its own method called login()

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }

    manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}

//AdminPage extends AuthPage. Therefore, AdminPage inherits both open() and login() methods.
//Here, super() calls the constructor of the immediate parent, which is AuthPage.

let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();

//- AuthPage extends BasePage
//- AdminPage extends AuthPage
//This creates a chain of inheritance.It is called multilevel inheritance.

//Execution:
//1. admin.open() calls the inherited BasePage method. The name is "Admin Panel".
//2. admin.login("superadmin") calls the inherited AuthPage method.
//3. admin.manageUsers() calls the method defined in AdminPage.