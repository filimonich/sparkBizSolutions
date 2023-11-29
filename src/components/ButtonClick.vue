<template>
  <button class="custom-button" @click="handleClick">Нажми меня!</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      //код обработчика клика кнопки
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
