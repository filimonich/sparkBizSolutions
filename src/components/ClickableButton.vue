<template>
  <div>
    <button @click="incrementCount" :style="{ backgroundColor: buttonColor }">
      Click Me
    </button>
    <span>{{ clickCount }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonColor: "red",
      clickCount: 0,
    };
  },
  methods: {
    incrementCount() {
      this.clickCount++;
      this.buttonColor = this.buttonColor === "red" ? "blue" : "red";
    },
  },
};
</script>

<style>
button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  cursor: pointer;
}

span {
  display: block;
  width: 20px;
  margin: 10px auto;
}
</style>
