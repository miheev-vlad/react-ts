import { useEffect, useState } from "react";
import { ICard, IComments } from "../../Interfaces";
import Comment from "../Comment";
import { CardTitle, CloseButton, CommentAddButton, CommentInput, ModalContainer, ModalLayout, ModalSection } from "./styles";

interface Props {
    clickLayout(): void;
    cardInModal: string;
    columnInModal: string;
    cardsList: ICard[];
    setCardsList(cards: ICard[]): void;
}

const Modal = ({ clickLayout, cardInModal, columnInModal, cardsList, setCardsList }: Props) => {
    const modalCard = cardsList.filter((item) => item.cardName === cardInModal);
    const [cardName, setCardName] = useState(modalCard[0].cardName)
    return(
        <ModalLayout>
            <ModalContainer>
                <CloseButton onClick={clickLayout}>x</CloseButton>
                <ModalSection>
                    <CardTitle type="text" name="" value={cardName} id="" placeholder="Card title..." onChange={(ev) => {
                    setCardName(ev.target.value);
                }} />
                    <p>in the <ins>{localStorage.getItem(`${columnInModal} name`)}</ins> column</p>
                    <p>Author: {modalCard[0].userName}</p>
                </ModalSection>
                <ModalSection>
                    <textarea>{modalCard[0].description}</textarea>
                    <button>Save Description</button>
                </ModalSection>
                <ModalSection>
                    <CommentInput type="text" name="" id="" placeholder="Your comment..." />
                    <CommentAddButton>Add Comment</CommentAddButton>
                </ModalSection>
                <ModalSection>
                    {modalCard[0].comments.map((item: IComments, key: number) => {
                        return <Comment  />
                    })}
                </ModalSection>
                <button>Delete</button>
            </ModalContainer>
        </ModalLayout>
    )
};

export default Modal;