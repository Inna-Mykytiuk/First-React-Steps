import { RecipeList } from './RecipeList/RecipeList';
import InitialRecipes from '../recipes.json';
import { Toaster } from 'react-hot-toast';

import { Layout } from './Layout/Layout';
import { Counter } from './Counter/Counter';
import { Component } from 'react';
import { LoginForm } from './Form/LoginForm';
import { SignUpForm } from './Form/RegistrationForm';
import { RecipeForm } from './RecipeForm/RecipeForm';
import { Clock } from './Clock/Clock';
import { AppWrapper } from './App.styled';
// import { Modal } from './RecipeList/Modal';
import { Search } from './Search/Search';
import { NewsList } from './NewsList/NewsList';
export class App extends Component {
  //початковий стан. дані із файла json, наш масив об'єктів, який ми будемо змінювати
  state = {
    recipes: InitialRecipes,
    // selectedImg: null,
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
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

  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 1500,
          }}
        />
        <Search onSearch={this.handleSubmit} />
        <NewsList value={this.state.textSearch} />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <RecipeForm onSubmit={this.addRecipe} />

        <AppWrapper>
          <Counter />
          <Clock />
        </AppWrapper>

        <LoginForm />
        <SignUpForm />
      </Layout>
    );
  }
}
