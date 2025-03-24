import "./createPage.css";
import Image from "../../components/image/image";

const CreatePage = () => {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            We recommend using high quality .jpg files less than 20 files less
            than 200MB.
          </div>
        </div>
        <form className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="description">Description</label>
            <textarea
              row={6}
              type="text"
              placeholder="Add a detailed discription"
              name="description"
              id="description"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              placeholder="Add a link"
              name="link"
              id="link"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="board">Board</label>
            <select name="board" id="board">
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>
          <div className="createFormItem">
            <label htmlFor="tags">Tagged topics</label>
            <input
              type="text"
              placeholder="Add a tags"
              name="tags"
              id="tags"
            />
            <small>Don't worry, people won't see your tags</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
