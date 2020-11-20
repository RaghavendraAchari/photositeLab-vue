import axios from "axios";

const url = "/api/social-links";

class SocialService {
  //get image
  static async getSocialLinks() {
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

export default SocialService;
