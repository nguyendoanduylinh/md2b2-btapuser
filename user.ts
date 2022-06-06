export class User {
  private _name: string;
  private _email: string;
  public _role: number;
  constructor(name: string, email: string, role: number) {
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
  get getName(): string {
    return this._name;
  }
  set setName(name: string) {
    this._name = name;
  }
  get getEmail(): string {
    return this._email;
  }
  set setEmail(email: string) {
    this._email = email;
  }
  get getRole(): number {
    return this._role;
  }
  set setRole(role: number) {
    this._role = role;
  }
}
