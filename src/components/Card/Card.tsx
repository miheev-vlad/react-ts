import { ICard } from '../../Interfaces';
import { CardHeader, CardLayout, CardTitle, DeleteButton } from './styles';

interface Props {
  card: ICard;
  identifier: string;
  deleteCard(cardNameToDelete: string): void;
  clickCardTitle(event: any): void;
}

const Card = ({ card, identifier, deleteCard, clickCardTitle }: Props) => {
  return (
    <CardLayout>
      <CardHeader>
        <CardTitle onClick={clickCardTitle}>
          <a href={card.cardName} id={identifier}>
            {card.cardName}
          </a>
        </CardTitle>
        <DeleteButton onClick={() => deleteCard(card.cardName)}>x</DeleteButton>
      </CardHeader>
      <hr></hr>
      <p>comments: {card.comments.length}</p>
    </CardLayout>
  );
};

export default Card;
