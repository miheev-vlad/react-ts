import { useState } from 'react';
import { IComments } from '../../Interfaces';
import {
  CommentHeader,
  CommentLayout,
  CommentText,
  DeleteButton,
} from './styles';

interface Props {
  item: IComments;
  updateCommentText(id: string, text: string): void;
  deleteComment(comTxt: string): void;
}

const Comment = ({ item, updateCommentText, deleteComment }: Props) => {
  const [commentText, setCommentText] = useState(item.commentText);
  return (
    <CommentLayout>
      <CommentHeader>
        <CommentText
          type="text"
          name=""
          id={commentText}
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
            updateCommentText(item.id, e.target.value);
          }}
        />
        <DeleteButton onClick={() => deleteComment(commentText)}>
          x
        </DeleteButton>
      </CommentHeader>
      <hr></hr>
      <p>comment author: {item.userName}</p>
    </CommentLayout>
  );
};

export default Comment;
