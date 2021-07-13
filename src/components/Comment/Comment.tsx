import { CommentHeader, CommentLayout, CommentText, DeleteButton } from './styles';

const Comment = () => {
    return(
        <CommentLayout>
            <CommentHeader>
                <CommentText>
                    text
                </CommentText>
                <DeleteButton>x</DeleteButton>
            </CommentHeader>
            <hr></hr>
            <p>comments: ...</p>
        </CommentLayout>
    )
};

export default Comment;