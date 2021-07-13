import Column from '../Сolumn';
import { Container } from './styles';

const Board = () => {
  return (
    <Container>
      <Column defaultName="TODO" identifier="Column_#1" />
      <Column defaultName="In Progress" identifier="Column_#2" />
      <Column defaultName="Testing" identifier="Column_#3" />
      <Column defaultName="Done" identifier="Column_#4" />
    </Container>
  );
};

export default Board;
