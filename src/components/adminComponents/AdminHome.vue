<template>
  <div>
    <div class="login-container">
      <div class="login-cred">
        <InputLabel
          label="User Name"
          inputType="text"
          inputName="userName"
          placeholder="User Name..."
          initialData
        />
        <InputLabel
          label="PassWord"
          inputType="text"
          inputName="userName"
          placeholder="User Name..."
          initialData
        />
        <div class="input-group">
          <button type="button" @click="login($event)">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import InputLabel from "./../InputLabel";

export default {
  name: "Admin",
  data() {
    return {
      userId: "",
      userName: "",
      passWord: ""
    };
  },
  components: {
    InputLabel
  },
  methods: {
    login: async function(e) {
      e.preventDefault();
      const response = await Axios.post("./api/admin/login", {
        userName: this.userName,
        password: this.passWord
      });

      if (response.data) {
        this.userId = response.data.adminId;
        this.$router.push({ path: `/admin/${this.userId}` });
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 80%;
  margin: auto;
  background-color: aqua;
}

.login-cred {
  padding: 20px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* background-color: black; */
}

.input-group {
  margin: 10px;
}
</style>