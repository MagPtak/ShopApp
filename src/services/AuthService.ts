import axios from "axios";

export class AuthService {
  host = '"http://localhost:9595/';
  public async login(email: any, password: any) {
    const result = await axios
      .post(`${this.host}/app/auth/login`, {
        username: email!.current,
        password: password!.current,
      })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        console.log(error);
      });
    return result;
  }
}

// export class AuthService {
//   host = '"http://localhost:9595/';
//   public async login(email: string | null, password: string | null) {
//     if (email !== null && password !== null) {
//       const result = await axios
//         .post(`${this.host}/app/auth/login`, {
//           username: email.current,
//           password: password.current,
//         })
//         .then((response: any) => {
//           return response;
//         })
//         .catch((error: any) => {
//           console.log(error);
//         });
//       return result;
//     } else {
//       return;
//     }
//   }
// }
