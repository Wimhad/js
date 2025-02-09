<template>
  <div class="recipe-container">
    <h3>Мои рецепты</h3>
    <div v-if="recipes.length === 0" class="recipe-container__no-recipes">
      Рецептов нет
    </div>
    <div v-for="(recipe, index) in recipes" :key="index" class="card">
      <div class="card-body">
        <div class="card-body__header">
          <h4>{{ recipe.name }}</h4>
          <svg v-if="recipe.isVegan" class="vegan-icon"></svg>
          {{ recipe.isVegan ? "Да" : "Нет" }}
          <svg class="time-icon"></svg>
          {{ recipe.cookTime }}
        </div>
        <p>Ингредиенты: {{ recipe.ingredients }}</p>
        <p>Последовательность: {{ recipe.steps }}</p>
        <button
            class="btn btn-light card-body__remove-button"
            @click="$emit('removeRecipe', index)"
        >
          Удалить рецепт
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipesContainer",
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.recipe-container {
  padding: 20px;
}
.card {
  margin-bottom: 15px;
}
</style>
