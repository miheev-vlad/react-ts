import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ICard } from '../../Interfaces';
import Backdrop from '../Backdrop';
import Card from '../Card/Card';
import Modal from '../Modal';
import {
  CardAddButton,
  CardTitleInput,
  ColumnContainer,
  Section,
  TitleInput,
} from './styles';

interface Props {
  defaultName: string;
  identifier: string;
}

const Column = ({ defaultName, identifier }: Props) => {
  const [show, setShow] = useState(false);
  const [columnName, setColumnName] = useState<string>(
    localStorage.getItem(`${identifier} name`)! || defaultName,
  );
  const [cardName, setCardName] = useState<string>('');
  const [cardsList, setCardsList] = useState<ICard[]>(
    JSON.parse(localStorage.getItem(`${identifier} cards`)!) || [],
  );
  const [cardInModal, setCardInModal] = useState<string>('');
  const [columnInModal, setColumnInModal] = useState<string>('');
  const [commentsNum, setCommentsNum] = useState<number>(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCardName(event.target.value);
  };
  const addCard = (titleStr: string): void => {
    const userName = localStorage.getItem('userName')!;
    const cardNameArr = cardsList.filter((card) => card.cardName === titleStr);
    if (!cardNameArr.length) {
      const newCard = {
        cardName,
        userName,
        comments: [],
        description: '',
        columnName: identifier,
      };
      setCardsList([...cardsList, newCard]);
      setCardName('');
    } else {
      window.alert('A card with this title already exists');
    }
  };
  const deleteCardHandler = (cardNameToDelete: string): void => {
    const filterCardArr = cardsList.filter(
      (card) => card.cardName !== cardNameToDelete,
    );
    setCardsList(filterCardArr);
  };
  const clickCardTitle = (event: any): void => {
    event.preventDefault();
    setCardInModal(event.target.innerText);
    setColumnInModal(event.target.id);
    setShow(true);
  };
  const clickLayout = (): void => {
    setShow(false);
  };
  const escClose = useCallback((event) => {
    if (event.keyCode === 27) setShow(false);
  }, []);
  useEffect(() => {
    localStorage.setItem(`${identifier} cards`, JSON.stringify(cardsList));
    localStorage.setItem(`${identifier} name`, columnName);
    document.addEventListener('keydown', escClose, false);
    return () => {
      document.removeEventListener('keydown', escClose, false);
    };
  }, [cardsList, identifier, columnName, escClose]);
  return (
    <ColumnContainer>
      {show && <Backdrop clickLayout={clickLayout} />}
      {show && (
        <Modal
          clickLayout={clickLayout}
          cardInModal={cardInModal}
          columnInModal={columnInModal}
          setCardsList={setCardsList}
          setCommentsNum={setCommentsNum}
        />
      )}
      <Section>
        <TitleInput
          type="text"
          name=""
          id={columnName}
          value={columnName}
          onChange={(ev) => {
            setColumnName(ev.target.value);
          }}
        />
      </Section>
      <Section>
        <CardTitleInput
          type="text"
          name=""
          id={identifier}
          value={cardName}
          placeholder="Card title..."
          onChange={handleChange}
        />
        <CardAddButton onClick={() => addCard(cardName)} disabled={!cardName}>
          Add Card
        </CardAddButton>
      </Section>
      <Section>
        {cardsList.map((item: ICard, key: number) => {
          return (
            <Card
              key={key}
              card={item}
              deleteCardHandler={deleteCardHandler}
              clickCardTitle={clickCardTitle}
              identifier={identifier}
              commentsNum={commentsNum}
            />
          );
        })}
      </Section>
    </ColumnContainer>
  );
};

export default Column;
