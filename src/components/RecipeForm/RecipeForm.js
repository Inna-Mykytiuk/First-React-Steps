import { Formik, Field, Form } from 'formik';

export const RecipeForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        imgUrl: '',
        time: '',
        servings: '',
        calories: '',
        difficulty: 'easy',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <label>
          Recipe Name
          <Field name="name" placeholder="Enter recipe name" />
        </label>
        <label>
          Image
          <Field name="imgUrl" />
        </label>
        <label>
          Time
          <Field name="time" type="number" />
        </label>
        <label>
          Servings
          <Field name="servings" type="number" />
        </label>
        <label>
          Calories
          <Field name="calories" type="number" />
        </label>
        <label>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
        </label>
        <button type="submit">Add Recipe</button>
      </Form>
    </Formik>
  );
};
