import './image.css'
import { IKImage } from "imagekitio-react";

const Image = ({ path, src, alt, className, w, h, onClick}) => {
  return (
    <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
        path={path}
        src={src}
        transformation={[{
          height: h,
          width: w,
        }]}
        alt={alt}
        onClick={onClick}
        loading="lazy"
        className={className}
        lqip={{ active: true, quality: 20 }}
      />
  )
}

export default Image