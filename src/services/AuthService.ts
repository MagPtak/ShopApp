import axios, { AxiosResponse, AxiosError } from "axios";

export class AuthService {
  host = "http://localhost:9595";

  public async login(email: string, password: string) {
    const result = await axios
      .post(`${this.host}/app/auth/login`, {
        username: email,
        password: password,
      })
      .then((response: AxiosResponse) => {
        console.log("response", response);
        console.log("bodyReq:", {
          username: email,
          password: password,
        });
        return response;
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
    return result;
  }

  public async registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string | number
  ) {
    const result = await axios
      .post(`${this.host}/app/auth/register`, {
        firstname: firstName,
        lastname: lastName,
        username: email,
        password: password,
      })
      .then((response: AxiosResponse) => {
        console.log("response", response);
        console.log("bodyReq:", {
          firstname: firstName,
          lastname: lastName,
          username: email,
          password: password,
        });
        return response;
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
    return result;
  }
}
