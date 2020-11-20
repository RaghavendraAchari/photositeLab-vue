import axios from "axios";

const url = "/api/images";

class ImageService {
  //get image
  static async getImages() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      return data;
    } catch (err) {
      return err;
    }
  }

  //insert
}

export default ImageService;
