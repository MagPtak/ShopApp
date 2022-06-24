import axios, { AxiosResponse, AxiosError } from "axios";

export class ProductsService {
  host = "http://localhost:9595/";

  public async getData() {
    const result = await axios
      .get(`${this.host}products`)
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
    return result;
  }
}
