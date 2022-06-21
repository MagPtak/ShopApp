import axios from "axios";

export class ProductsService {
  host = "http://localhost:9595/";

  public async getData(
    setMensClothing: any,
    setWomensClothing: any,
    setJewelry: any,
    setElectronics: any
  ) {
    const result = await axios
      .get(`${this.host}/products`)
      .then((response: any) => {
        const arr = Object.values(response.data);
        arr.filter(function (el: any) {
          if (el.category === "men's clothing") {
            setMensClothing((mensClothing: any) => [...mensClothing, el]);
          } else if (el.category === "women's clothing") {
            setWomensClothing((womensClothing: any) => [...womensClothing, el]);
          } else if (el.category === "jewelery") {
            setJewelry((jewelry: any) => [...jewelry, el]);
          } else if (el.category === "electronics") {
            setElectronics((electronics: any) => [...electronics, el]);
          }
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
    return result;
  }
}
