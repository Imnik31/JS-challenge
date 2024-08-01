// class based get, set


class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){                                     // getter
        return this._email.toUpperCase()
    }
    set email(value){                                // setter   it will never return any value
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const nikhil= new User("h@hitesh.ai", "abc")
console.log(hitesh.email);