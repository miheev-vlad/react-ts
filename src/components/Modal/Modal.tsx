import { ChangeEvent, useEffect, useState } from 'react';
import { ICard, IComments } from '../../Interfaces';
import Comment from '../Comment';
import {
  CardInfo,
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
  setCardsList(cardsList: ICard[]): void;
  setCommentsNum(num: number): void;
}

const Modal = ({
  clickLayout,
  cardInModal,
  columnInModal,
  setCardsList,
  setCommentsNum,
}: Props) => {
  const cardsArr = [
    ...JSON.parse(localStorage.getItem(`${columnInModal} cards`)!),
  ];
  const [updateCardsArr, setUpdateCardsArr] = useState(cardsArr);
  const [cardName, setCardName] = useState(cardInModal);
  const modalCard = cardsArr.filter((item) => item.cardName === cardName);
  const [userName, setUserName] = useState(modalCard[0].userName);
  const [comments, setComments] = useState(modalCard[0].comments);
  const [description, setDescription] = useState(modalCard[0].description);
  const [columnName, setColumnName] = useState(modalCard[0].columnName);
  const [commentText, setCommentText] = useState('');
  const deleteCard = (): void => {
    const filterCardsArr = updateCardsArr.filter(
      (item) => item.cardName !== cardName,
    );
    setUpdateCardsArr(filterCardsArr);
    localStorage.setItem(
      `${columnInModal} cards`,
      JSON.stringify(filterCardsArr),
    );
    setCardsList(filterCardsArr);
    clickLayout();
  };
  const updateCardTitle = (title: string): void => {
    updateCardsArr.forEach((item) => {
      if (item.cardName === cardName) {
        item.cardName = title;
      }
    });
    setUpdateCardsArr(updateCardsArr);
    localStorage.setItem(
      `${columnInModal} cards`,
      JSON.stringify(updateCardsArr),
    );
    setCardsList(updateCardsArr);
  };
  const updateCardDescription = (description: string): void => {
    updateCardsArr.forEach((item) => {
      if (item.cardName === cardName) {
        item.description = description;
      }
    });
    setUpdateCardsArr(updateCardsArr);
    localStorage.setItem(
      `${columnInModal} cards`,
      JSON.stringify(updateCardsArr),
    );
    setCardsList(updateCardsArr);
  };
  const addComment = (): void => {
    const date = new Date();
    updateCardsArr.forEach((item) => {
      if (item.cardName === cardName) {
        item.comments.push({ userName, commentText, id: date.toString() });
      }
    });
    setUpdateCardsArr(updateCardsArr);
    localStorage.setItem(
      `${columnInModal} cards`,
      JSON.stringify(updateCardsArr),
    );
    setCardsList(updateCardsArr);
    setCommentText('');
    setCommentsNum(comments.length);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCommentText(event.target.value);
  };
  const updateCommentText = (id: string, newComtext: string): void => {
    updateCardsArr.forEach((item) => {
      if (item.cardName === cardName) {
        item.comments.forEach((com: any) => {
          if (com.id === id) {
            com.commentText = newComtext;
          }
        });
      }
    });
    setUpdateCardsArr(updateCardsArr);
    localStorage.setItem(
      `${columnInModal} cards`,
      JSON.stringify(updateCardsArr),
    );
    setCardsList(updateCardsArr);
  };
  const deleteComment = (comTxt: string): void => {
    const filterComArr = comments.filter(
      (com: any) => com.commentText !== comTxt,
    );
    setComments(filterComArr);
    setCommentsNum(filterComArr.length);
    updateCardsArr.forEach((item) => {
      if (item.cardName === cardName) {
        item.comments = filterComArr;
      }
    });
    setUpdateCardsArr(updateCardsArr);
    localStorage.setItem(
      `${columnInModal} cards`,
      JSON.stringify(updateCardsArr),
    );
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
              setCardName(e.target.value);
              updateCardTitle(e.target.value);
            }}
          />
          <CardInfo>
            <p>
              in the column:{' '}
              <ins>{localStorage.getItem(`${columnInModal} name`)}</ins>{' '}
            </p>
            <p>Author: {userName}</p>
            <button onClick={() => deleteCard()}>Delete Card</button>
          </CardInfo>
        </ModalSection>
        <ModalSection>
          <p>Description:</p>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              updateCardDescription(e.target.value);
            }}></textarea>
        </ModalSection>
        <ModalSection>
          <p>Comments:</p>
          <CommentInput
            type="text"
            name=""
            id=""
            placeholder="Your comment..."
            onChange={handleChange}
            value={commentText}
          />
          <CommentAddButton onClick={addComment} disabled={!commentText}>
            Add Comment
          </CommentAddButton>
        </ModalSection>
        <ModalSection>
          {comments.length === 0 && <p>No comments yet...</p>}
          {comments.map((item: IComments, key: number) => {
            return (
              <Comment
                key={key}
                item={item}
                updateCommentText={updateCommentText}
                deleteComment={deleteComment}
              />
            );
          })}
        </ModalSection>
      </ModalContainer>
    </ModalLayout>
  );
};

export default Modal;
