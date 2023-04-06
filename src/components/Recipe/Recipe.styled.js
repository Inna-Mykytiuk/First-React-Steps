import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 8px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg:hover {
    color: red;
    width: 16px;
    height: 16px;
  }
`;

export const RecipeDifficulties = styled.div``;

export const BadgeList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

// export const Badge = styled.span`
//   padding: 8px 16px;
//   border: 1px solid #000;
//   border-radius: 4px;
//   background-color: ${props => {
//     return props.isActive ? 'orange' : 'transparent';
//   }};
//   color: ${props => {
//     return props.isActive ? '#fff' : '#000';
//   }};
// `;

export const Badge = styled.span`
  padding: 8px 16px;
  align-items: center;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  background-color: ${props => {
    if (!props.isActive) {
      return 'white';
    }

    switch (props.value) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'orange';
      case 'hard':
        return 'red';
      default:
        return 'white';
    }
    // return props.isActive ? 'orange' : 'transparent';
  }};
  color: ${props => {
    return props.isActive ? '#fff' : '#000';
  }};
  text-transform: ${props => {
    return props.isActive ? 'uppercase' : 'none';
  }};
`;

export const RecipeTitle = styled.h2`
  text-align: center;
`;
export const DifficultiesTitle = styled.h3`
  text-align: center;
`;
