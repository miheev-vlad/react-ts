import { ICard } from '../../Interfaces';
import { CardLayout, DeleteButton } from './styles';

interface Props {
    card: ICard;
    deleteCard(cardNameToDelete: string): void;
}

const Card = ({ card, deleteCard }: Props) => {
    return(
        <CardLayout>
            <div>
                {card.cardName}
            </div>
            <DeleteButton onClick={() => deleteCard(card.cardName)}>x</DeleteButton>
        </CardLayout>
    )
};

export default Card;