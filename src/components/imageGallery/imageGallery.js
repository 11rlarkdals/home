import "./imageGallery.css";

import catimg from "../../images/catimg.png";
import cat from "../../images/cat.png";
import Card from "./components/card";

function ImageGallery() {
  console.log("고양이 사진:", { catimg });
  return (
    <div>
      <div className="gallery-wrap">
        <div className="gallery-head">
          <div className="gallery-title">나는 웹디자이너</div>
          <div className="gallery-text">
            마우스 커서를 위치하면 정보가 나와요
          </div>
        </div>
        <div className="card-grp">
          {contents.map((content, index) => {
            return (
              <Card
                key={index}
                bgimg={content.bgimg}
                title={content.title}
                text={content.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;

const contents = [
  {
    bgimg: cat,
    title: "애완동물의 세계",
    text: "최근 강아지 고양이가 대부분이던 애완 동물은 오늘날 수를 셀수 없을 정도로 다양해 졌어요.",
  },
  {
    bgimg: catimg,
    title: "카리스마 애완동물",
    text: "강렬한 존재감을 보여주는 애완동물을 만나보세요 ",
  },
];
