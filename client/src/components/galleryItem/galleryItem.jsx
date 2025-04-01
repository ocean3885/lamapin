import "./galleryItem.css";
import { Link } from "react-router";
import Image from "../image/image";

const GalleryItem = ({ item }) => {
  const optimizedHeight = (417 * item.height) / item.width;
  const spanValue = Math.min(Math.ceil(item.height / 100), 12);

  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${spanValue}` }}
    >
      {item.media.startsWith("http") ? (
        <Image src={item.media} alt="" w={417} h={optimizedHeight} />
      ) : (
        <Image path={item.media} alt="" w={417} h={optimizedHeight} />
      )}
      <Link to={`/pin/${item._id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
