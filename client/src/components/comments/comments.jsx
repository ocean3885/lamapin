import './comments.css'
import Image from '../image/image';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

const Comments = () => {

  const [open, setopen] = useState(false)

  return (
    <div className='comments'>
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a minima amet. Asperiores dolorum laboriosam, fugiat autem vitae numquam recusandae neque possimus accusantium distinctio aliquid necessitatibus corporis minus dolores optio.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a minima amet. Asperiores dolorum laboriosam, fugiat autem vitae numquam recusandae neque possimus accusantium distinctio aliquid necessitatibus corporis minus dolores optio.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a minima amet. Asperiores dolorum laboriosam, fugiat autem vitae numquam recusandae neque possimus accusantium distinctio aliquid necessitatibus corporis minus dolores optio.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
      </div>
      <form className='commentForm'>
        <input type="text" placeholder='Add a comment'/>
        <div className="emoji">
          <div onClick={()=> setopen((prev) => !prev)}>😊</div>
          {open && (
          <div className="emojiPicker">
            <EmojiPicker width="100%"/>
          </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Comments