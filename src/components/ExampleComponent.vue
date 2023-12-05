<template>
  <div>
    <!-- заголовок с привязанным атрибутом title -->
    <h1 v-bind:title="pageTitle">Пример v-bind</h1>

    <!-- абзац с условием отображения и привязанным классом -->
    <p v-if="showParagraph" :class="paragraphClass">
      Этот абзац имеет класс, указанный в переменной paragraphClass.
    </p>

    <!-- компонент ButtonClick с пользовательским классом и обработчиком клика -->
    <ButtonClick
      class="custom-button"
      @click="changeParagraphColor"
    ></ButtonClick>
  </div>

  <div>
    <h1>My App</h1>
    <ClickableButton />
  </div>
</template>

<script>
import ClickableButton from "./ClickableButton.vue";
import ButtonClick from "./ButtonClick.vue";

export default {
  components: {
    ClickableButton,
    // Импорт компонента ButtonClick из файла ButtonClick.vue
    ButtonClick,
  },
  data() {
    return {
      // Заголовок страницы
      pageTitle: "Пример v-bind",
      // Флаг отображения абзаца
      showParagraph: true,
      // Массив цветов
      colors: ["red-text", "green-text", "blue-text"],
      // Индекс текущего цвета
      currentColorIndex: 0,
    };
  },
  computed: {
    // Вычисляемый свойство для класса абзаца
    paragraphClass() {
      return this.showParagraph ? this.colors[this.currentColorIndex] : "";
    },
  },
  methods: {
    // Метод для изменения цвета абзаца
    changeParagraphColor() {
      // Инвертирование флага отображения абзаца
      this.showParagraph = !this.showParagraph;
      // Изменение индекса текущего цвета с помощью остатка от деления
      this.currentColorIndex =
        (this.currentColorIndex + 1) % this.colors.length;
    },
  },
};
</script>

<style scoped>
.red-text {
  color: red;
}
.green-text {
  color: green;
}
.blue-text {
  color: blue;
}
</style>
