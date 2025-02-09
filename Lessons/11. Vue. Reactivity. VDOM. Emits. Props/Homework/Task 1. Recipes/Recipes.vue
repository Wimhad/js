<template>
  <div class="recipes">
    <NewRecipeForm @addRecipe="addRecipe" />
    <RecipesContainer :recipes="recipes" @removeRecipe="removeRecipe" />
  </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
  name: "Recipes",
  components: {
    NewRecipeForm,
    RecipesContainer,
  },
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
    },
    removeRecipe(index) {
      this.recipes.splice(index, 1);
    },
  },
};
</script>

<style>
.recipes {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>

<!--
<template>
    <div class="recipes">
        &lt;!&ndash;Начало&ndash;&gt;
        <NewRecipeForm
            @addRecipe="addRecipe"
        />
        <RecipesContainer
            :recipes="recipes"
            @removeRecipe="onRemoveRecipe"
        />
        &lt;!&ndash;Конец&ndash;&gt;
    </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
    name: 'Recipes',
    // Начало
    components: {
        RecipesContainer,
        NewRecipeForm,
    },
    data() {
        return {
            recipes: [],
        }
    },
    methods: {
        addRecipe(data) {
            this.recipes.push(data);
        },
        onRemoveRecipe(index) {
            this.recipes.splice(index, 1)
        }
    },
    // Конец
};
</script>

<style>
.recipes {
    width: 1000px;
    margin: 40px;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background: whitesmoke;
    border-radius: 15px;
}

.recipes > div {
    width: 50%;
}
</style>
-->
