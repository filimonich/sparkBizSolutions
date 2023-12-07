<template>
  <button class="custom-button" @click="handleClick">Нажми меня!</button>
</template>

<script>
// Экспорт объекта по умолчанию из модуля
export default {
  // Свойство, содержащее набор методов компонента
  methods: {
    // Обработчик клика на кнопку
    handleClick() {
      // Генерирует событие "click" для родительского компонента
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
