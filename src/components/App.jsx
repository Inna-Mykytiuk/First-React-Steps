import { RecipeList } from './RecipeList/RecipeList';
import InitialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Counter } from './Counter/Counter';
import { Component } from 'react';

export class App extends Component {
  state = {
    recipes: InitialRecipes,
    // selectedImg: null,
  };

  //створюємо метод видалення рецепту
  deleteRecipe = id => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== id),
    }));
  };

  //функція для вибору картинки
  // selectImg = imageUrl => {
  //   this.setState({ selectedImg: imageUrl });
  // };

  render() {
    return (
      <Layout>
        {/* {this.state.selectedImg && (
          <div>
            <h2>Modal</h2>
            <img src={this.state.selectedImg} alt="selected" width="320" />
          </div>
        )} */}
        <RecipeList
          items={this.state.recipes}
          onDelete={this.deleteRecipe}
          // onSelect={this.selectImg}
        />
        <GlobalStyle />
        <Counter />
      </Layout>
    );
  }
}
