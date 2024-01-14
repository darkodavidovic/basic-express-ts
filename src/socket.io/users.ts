interface IUserData {
  id: string
  name: string
  room: string
}

interface IUsers {
  users: IUserData[]
  addUser: (id: string, name: string, room: string) => IUserData
  getUserList: (room: string) => string[]
  getUser: (id: string) => IUserData
  removeUser: (id: string) => IUserData
  removeUserName: (name: string, id: string) => IUserData
  allUsers: () => IUserData[]
}

class Users implements IUsers {
  users: IUserData[]

  constructor() {
    this.users = [];
  }

  addUser(id: string, name: string, room: string) {
    let user = { id, name, room };
    this.users.push(user);
    return user;
  }

  getUserList(room: string) {
    let users = this.users.filter((user) => user.room === room);
    let namesArray = users.map((user) => user.name);

    return namesArray;
  }

  getUser(id: string) {
    return this.users.filter((user) => user.id === id)[0];
  }

  removeUser(id: string) {
    let user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }
  removeUserName(name: string, id: string) {
    let user = this.getUser(id);
    this.users = this.users.filter((v) => v.name !== name)
    return user;
  }

  allUsers() {
    return this.users
  }
}
const socketUsers = new Users()
export default socketUsers