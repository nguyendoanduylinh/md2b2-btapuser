"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    getInfo() {
        console.log({ name: this._name, email: this._email, role: this._role });
    }
    isAdmin() {
        if (this._role === 1) {
            console.log(`This is Admin`);
        }
        if (this._role === 2) {
            console.log(`This is User`);
        }
    }
    get getName() {
        return this._name;
    }
    set setName(name) {
        this._name = name;
    }
    get getEmail() {
        return this._email;
    }
    set setEmail(email) {
        this._email = email;
    }
    get getRole() {
        return this._role;
    }
    set setRole(role) {
        this._role = role;
    }
}
exports.User = User;
