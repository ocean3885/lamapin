import Image from "../image/image";
import {format} from "timeago.js" 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../../utils/authStore";
import apiRequest from '../../utils/apiRequest';


const Comment = ({ comment }) => {

  const currentUser = useAuthStore((state) => state.currentUser);
  const queryClient = useQueryClient();

  const deleteComment = async (commentId) => {
    const res = await apiRequest.delete(`/comments/${commentId}`);
    return res.data;
  };

  const mutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", comment.pin] }); // 댓글 목록 다시 불러오기
    },
  });

  const handleDelete = () => {
    if (window.confirm("이 댓글을 삭제하시겠습니까?")) {
      mutation.mutate(comment._id);
    }
  };

  return (
    <div className="comment">
      <Image src={comment.user.img || "/general/noAvatar.png"} alt="" />
      <div className="commentContent">
        <div className="usernamebox">
        <span className="commentUsername">{comment.user.displayName}</span>
        {currentUser?._id === comment.user._id && (
            <span className="deleteBtn" onClick={handleDelete} style={{ cursor: "pointer", marginLeft: "8px" }}>
              ❌
            </span>
          )}
        </div>
        <p className="commentText">
          {comment.description}
        </p>
        <span className="commentTime">{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;