import { useEffect, useState } from 'react';
import { IComments } from '../../Interfaces';
import Comment from '../Comment';
import {
  CardTitle,
  CloseButton,
  CommentAddButton,
  CommentInput,
  ModalContainer,
  ModalLayout,
  ModalSection,
} from './styles';

interface Props {
  clickLayout(): void;
  cardInModal: string;
  columnInModal: string;
}

const Modal = ({ clickLayout, cardInModal, columnInModal }: Props) => {
  const cardsArr = [
    ...JSON.parse(localStorage.getItem(`${columnInModal} cards`)!),
  ];
  const modalCard = cardsArr.filter((item) => item.cardName === cardInModal);
  const [cardName, setCardName] = useState(modalCard[0].cardName);
  const [userName, setUserName] = useState(modalCard[0].userName);
  const [comments, setComments] = useState(modalCard[0].comments);
  const [description, setDescription] = useState(modalCard[0].description);
  const [columnName, setColumnName] = useState(modalCard[0].columnName);
  const [updateCard, setUpdateCard] = useState({
    cardName,
    userName,
    comments,
    description,
    columnName,
  });
  useEffect(() => {}, []);
  const deleteCard = (cardNameToDelete: string): void => {
    clickLayout();
  };
  return (
    <ModalLayout>
      <ModalContainer>
        <CloseButton onClick={clickLayout}>x</CloseButton>
        <ModalSection>
          <CardTitle
            type="text"
            name=""
            id={cardName}
            value={cardName}
            onChange={(e) => {
              updateCard.cardName = e.target.value;
            }}
          />
          <p>
            in the <ins>{localStorage.getItem(`${columnInModal} name`)}</ins>{' '}
            column
          </p>
          <p>Author: {userName}</p>
        </ModalSection>
        <ModalSection>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
          <button>Save Description</button>
        </ModalSection>
        <ModalSection>
          <CommentInput
            type="text"
            name=""
            id=""
            placeholder="Your comment..."
          />
          <CommentAddButton>Add Comment</CommentAddButton>
        </ModalSection>
        <ModalSection>
          {comments.map((item: IComments, key: number) => {
            return <Comment key={key} />;
          })}
        </ModalSection>
        <button onClick={() => deleteCard(cardName)}>Delete</button>
      </ModalContainer>
    </ModalLayout>
  );
};

export default Modal;
