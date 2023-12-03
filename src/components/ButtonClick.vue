<template>
  <button class="custom-button" @click="handleClick">Нажми меня!</button>
</template>

<script>
export default {
  methods: {
    // обработчик клика на кнопку
    handleClick() {
      // генерирует событие "click" для родительского компонента
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.custom-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
