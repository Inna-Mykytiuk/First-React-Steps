import { RecipeList } from './RecipeList/RecipeList';
import InitialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Counter } from './Counter/Counter';
import { Component } from 'react';
import { LoginForm } from './Form/LoginForm';
import { SignUpForm } from './Form/RegistrationForm';
import { RecipeForm } from './RecipeForm/RecipeForm';
// import { Modal } from './RecipeList/Modal';

export class App extends Component {
  //початковий стан. дані із файла json, наш масив об'єктів, який ми будемо змінювати
  state = {
    recipes: InitialRecipes,
    // selectedImg: null,
  };

  //створюємо метод видалення рецепту за id(бо він є унікальним)
  deleteRecipe = id => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== id),
    }));
  };

  addRecipe = newRecipe => {
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe],
    }));
  };

  render() {
    return (
      <Layout>
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <RecipeForm onSubmit={this.addRecipe} />
        <GlobalStyle />
        <Counter />
        <LoginForm />
        <SignUpForm />
      </Layout>
    );
  }
}
