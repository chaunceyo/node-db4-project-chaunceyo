function getRecipeById(recipe_id) {
    return Promise.resolve(`my recipe: ${recipe_id}`)
}

module.exports = { getRecipeById }