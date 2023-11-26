<!-- Импорт функции ref из библиотеки vue -->
<script setup>
import { ref } from 'vue';

// <!-- Определение свойств компонента -->
defineProps({
  msg: String, // Свойство msg типа String
});

// <!-- Создание реактивной ссылки на значение 0 -->
const count = ref(0);
</script>

<!-- Шаблон компонента -->
<template>
  <!-- Вывод свойства msg -->
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- Кнопка, которая увеличивает значение count при клике -->
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      <!-- Сообщение для разработчика -->
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <!-- Ссылки на полезные ресурсы -->
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<!-- Стили компонента -->
<style scoped>
.read-the-docs {
  /* // Установка цвета текста для класса .read-the-docs */
  color: #888;
}
</style>
