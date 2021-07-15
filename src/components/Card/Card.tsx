import { ICard } from '../../Interfaces';
import { CardHeader, CardLayout, CardTitle, DeleteButton } from './styles';

interface Props {
  card: ICard;
  identifier: string;
  deleteCardHandler(cardNameToDelete: string): void;
  clickCardTitle(event: any): void;
  commentsNum: number;
}

const Card = ({
  card,
  identifier,
  deleteCardHandler,
  clickCardTitle,
  commentsNum,
}: Props) => {
  return (
    <CardLayout>
      <CardHeader>
        <CardTitle onClick={clickCardTitle}>
          <a href={card.cardName} id={identifier}>
            {card.cardName}
          </a>
        </CardTitle>
        <DeleteButton onClick={() => deleteCardHandler(card.cardName)}>
          x
        </DeleteButton>
      </CardHeader>
      <hr></hr>
      <p>comments: {commentsNum}</p>
    </CardLayout>
  );
};

export default Card;
