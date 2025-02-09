<template>
  <div class="recipe-form">
    <h3>Создать новый рецепт</h3>
    <div class="recipe-form__block">
      <label class="form-label">Название нового рецепта</label>
      <input
          type="text"
          class="form-control recipe-form__name"
          v-model="name"
          placeholder="Введите название рецепта"
      />
    </div>
    <div class="recipe-form__block">
      <label class="form-label">Ингредиенты</label>
      <textarea
          class="form-control recipe-form__ingredients"
          v-model="ingredients"
          placeholder="Введите ингредиенты"
      ></textarea>
    </div>
    <div class="recipe-form__block">
      <label class="form-label">Последовательность действий</label>
      <textarea
          class="form-control recipe-form__recipe-text"
          v-model="steps"
          placeholder="Введите последовательность действий"
      ></textarea>
    </div>
    <div class="recipe-form__block">
      <label class="form-label">Время приготовления</label>
      <select class="form-select recipe-form__cook-time" v-model="cookTime">
        <option value="5 минут">5 минут</option>
        <option value="10 минут">10 минут</option>
        <option value="15 минут">15 минут</option>
        <option value="30 минут">30 минут</option>
        <option value="1 час">1 час</option>
        <option value="2 часа">2 часа</option>
      </select>
    </div>
    <div class="recipe-form__block">
      <input
          type="checkbox"
          class="form-check-input"
          v-model="isVegan"
      />
      <label class="form-check-label">Вегетарианское блюдо</label>
    </div>
    <div class="recipe-form__block">
      <button class="btn btn-dark recipe-form__add-button" @click="addRecipe">
        Добавить рецепт
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewRecipeForm",
  data() {
    return {
      name: "",
      ingredients: "",
      steps: "",
      cookTime: "5 минут",
      isVegan: false,
    };
  },
  methods: {
    addRecipe() {
      if (this.name && this.ingredients && this.steps) {
        this.$emit("addRecipe", {
          name: this.name,
          ingredients: this.ingredients,
          steps: this.steps,
          cookTime: this.cookTime,
          isVegan: this.isVegan,
        });
        // Reset form fields
        this.name = "";
        this.ingredients = "";
        this.steps = "";
        this.cookTime = "5 минут";
        this.isVegan = false;
      } else {
        alert("Пожалуйста, заполните все поля!");
      }
    },
  },
};
</script>

<style>
.recipe-form {
  padding: 20px;
}
.recipe-form__block {
  margin-bottom: 15px;
}
</style>
