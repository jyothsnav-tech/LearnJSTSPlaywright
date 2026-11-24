interface BasePage{
    url:string
    title:string
}
interface LoginPAGE extends BasePage{
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface FreeTrailPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

const loginPage:LoginPAGE = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}
let freeTrialPage: FreeTrailPage = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit",
}

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.usernameSelector);

// LoginPAGE inherits all the properties defined in BasePage.
// LoginPAGE gets the two properties url and title from BasePage, along with its own three properties.

// Key points to remember
// - interface defines the structure of an object.
// - extends allows one interface to inherit properties from another interface.
// - BasePage is the parent interface in your example.
// - LoginPAGE and FreeTrailPage are child interfaces.
// - A child interface must satisfy both its inherited properties and its own required properties.