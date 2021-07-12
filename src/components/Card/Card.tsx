import React from 'react';
import { ICard } from '../../Interfaces';

interface Props {
    card: ICard;
    deleteCard(cardNameToDelete: string): void;
}

const Card = ({ card, deleteCard }: Props) => {
    return(
        <div>
            <div>
                {card.cardName}
            </div>
            <button onClick={() => deleteCard(card.cardName)}>x</button>
        </div>
    )
};

export default Card;