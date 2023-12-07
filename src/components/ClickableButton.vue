<template>
  <div>
    <button v-on:click="incrementCount">Нажми меня!</button>
    <span>{{ clickCount }}</span>
    <button class="reset" @click="resetCount">Сбросить счетчик</button>
  </div>
</template>

<script>
// Экспортируемый объект, представляющий компонент Vue
export default {
  // Метод data, возвращающий объект с данными компонента
  data() {
    // Возвращаем объект с данными компонента
    return {
      clickCount: 0, // Количество кликов
    };
  }, // Методы компонента
  methods: {
    // Метод для увеличения счетчика кликов
    incrementCount() {
      this.clickCount++; // Увеличиваем счетчик кликов на 1 при каждом нажатии на кнопку
    },
    resetCount() {
      this.clickCount = 0; // Сбрасываем счетчик кликов на 0
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
  background-color: red;
  cursor: pointer;
}

button:active {
  border: none;
  background-color: blue;
}

span {
  display: block;
  width: 20px;
  margin: 10px auto;
}

.reset {
  background-color: green;
}
</style>
