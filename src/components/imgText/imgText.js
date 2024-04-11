import Card from "./components/card";
import card from "./components/card";
import "./imgText.css";

function imgText() {
  return (
    <div className="imgText">
      <div className="imgText-wrap">
        <div className="imgText-card text">
          <div className="imgText-text">유용한 사이트 </div>
          <div className="imgText-text2" style={{ marginTop: "7px" }}>
            웹디자이너, 웹퍼블리셔, 프로트앤드 개발자를 위한 유용한
            사이트입니다.
            <p style={{ marginTop: "7px" }}>
              •튜토리얼 사이트 <p>•레퍼런스 사이트</p>
              <p>•웹폰트 사이트</p>
              <p>•CSS 사이트</p>
              <p>•WebGL 사이트</p>
              <p>•Youtube 사이트</p>
            </p>
          </div>
        </div>
        <Card
          imgURL="https://i.imgur.com/tj5dJab.png"
          byonName="레퍼런스 사이트"
          btnColor="#7C2B39"
        />
        <Card
          imgURL="https://i.imgur.com/F6aFgNC.png"
          byonName="튜토리얼 사이트"
          btnColor="#2b387c"
        />
      </div>
    </div>
  );
}

export default imgText;
