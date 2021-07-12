import { ChangeEvent, useEffect, useState } from 'react';
import { ICard } from '../../Interfaces';
import Card from '../Card/Card';

interface Props {
    defaultName: string;
    identifier: string;
}

const Column = ({ defaultName, identifier }: Props) => {
    const [columnName, setColumnName] = useState<string>(localStorage.getItem(`${identifier} name`)! ||defaultName);
    const [cardName, setCardName] = useState<string>('');
    const [cardsList, setCardsList] = useState<ICard[]>(JSON.parse(localStorage.getItem(`${identifier} cards`)!) || []);
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setCardName(event.target.value);
    }
    const addCard = (): void => {
      const newCard = { cardName };
      setCardsList([...cardsList, newCard]);
      setCardName('');
    }
    const deleteCard = (cardNameToDelete: string): void => {
      setCardsList(cardsList.filter((card) => card.cardName !== cardNameToDelete))
    }
    useEffect(() => {
        localStorage.setItem(`${identifier} cards`, JSON.stringify(cardsList))
        localStorage.setItem(`${identifier} name`, columnName);
    }, [cardsList, identifier, columnName])
    return(
        <div>
            <section>
                <input type="text" name="" id={columnName} value={columnName} onChange={(ev) => {
                    setColumnName(ev.target.value);
                }}/>
            </section>
            <section>
                <input type="text" name="" id={identifier} value={cardName} placeholder="Card name..." onChange={handleChange}/>
            <button onClick={addCard}>Add Card</button>
            </section>
            <section>
                {cardsList.map((item: ICard, key: number) => {
                    return <Card key={key} card={item} deleteCard={deleteCard}/>
                })}
            </section>
        </div>
    )
};

export default Column;