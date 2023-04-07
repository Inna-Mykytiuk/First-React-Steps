import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn } from 'react-icons/hi';
import { Modal } from '../RecipeList/Modal';
import {
  Container,
  Image,
  RecipeInfo,
  InfoItem,
  RecipeDifficulties,
  BadgeList,
  Badge,
  DifficultiesTitle,
  RecipeTitle,
  Meta,
  Actions,
} from './Recipe.styled';
import { Component } from 'react';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const {
      item: { name, image, time, servings, calories, difficulty, id },
      onDelete,
    } = this.props;

    return (
      <Container>
        <Image src={image} alt={name} />
        <Meta>
          <RecipeTitle>{name}</RecipeTitle>

          <RecipeInfo>
            <InfoItem>
              <BsAlarm />
              {time} min
            </InfoItem>
            <InfoItem>
              <AiOutlinePieChart />
              {servings} servings
            </InfoItem>
            <InfoItem>
              <HiOutlineChartBar />
              {calories} calories
            </InfoItem>
          </RecipeInfo>
          <RecipeDifficulties>
            <DifficultiesTitle>Difficulties</DifficultiesTitle>
            <BadgeList>
              <Badge isActive={difficulty === 'easy'} value={difficulty}>
                Easy
              </Badge>
              <Badge isActive={difficulty === 'medium'} value={difficulty}>
                Medium
              </Badge>
              <Badge isActive={difficulty === 'hard'} value={difficulty}>
                Hard
              </Badge>
            </BadgeList>
          </RecipeDifficulties>

          <Actions>
            <button
              type="button"
              onClick={() => onDelete(id)}
              aria-label="Delete"
            >
              <HiTrash />
            </button>
            <button type="button" onClick={this.openModal} aria-label="Zoom">
              <HiZoomIn />
            </button>
          </Actions>
        </Meta>

        {this.state.isOpen && (
          <Modal
            image={image}
            isOpen={this.state.isOpen}
            onClose={this.closeModal}
          />
        )}
      </Container>
    );
  }
}

// Описуємо PropTypes для компонента Recipe
Recipe.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
