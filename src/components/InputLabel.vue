<template>
  <div>
    <div class="input-container">
      <form>
        <div class="input-groups">
          <p v-if="label!==''" class="label">{{label}}</p>
          <input
            :type="inputType"
            :name="inputName"
            :id="inputName"
            :placeholder="placeholder"
            v-model="inputData"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputLabel",
  data() {
    return {
      inputData: ""
    };
  },
  props: {
    label: String,
    inputType: String,
    inputName: String,
    placeholder: String,
    initialData: String
  },
  mounted() {
    if (this.props.initialData != "") {
      this.inputData = this.props.initialData;
    }
  }
};
</script>

<style >
</style>