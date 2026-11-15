//The below Class is a blueprint for creating API clients with a base URL. 
// It has a constructor that takes a base URL as an argument and 
// a method called kartik that appends a given path to the base URL.

class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    kartik(path) {
        return this.baseURL + path;
    }
}
let staging = new APIClient("https://staging.api.com");
let prod = new APIClient("https://prod.api.com");
console.log(staging.kartik("/users"));
console.log(prod.kartik("/prod/users"));