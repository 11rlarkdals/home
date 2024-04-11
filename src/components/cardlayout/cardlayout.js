import "./cardlayout.css";

function cardlayout() {
  return (
    <div className="cardlayout-warp">
      <div className="cardlayout-head">
        <div className="cardlayout-head-title">강민이의 코딩강의</div>
        <div className="cardlayout-head-content">
          <div>학생 개발자를 위한 강의들 입니다.</div>
          <div>NEXON Lv1 Gothic OTE 22px 150% #666</div>
        </div>

        <div className="card-grp">
          {cards.map((card) => (
            <div className="card-grp-warp">
              <div
                className="cardlaimageyout-grp-card-image"
                style={{ backgroundImage: `url(${card.url})` }}
              ></div>
              <div className="cardlayout-grp-card-title">{card.title}</div>
              <div className="cardlayout-grp-card-content">
                {card.content}
                <div
                  className="cardlayout-grp-card-link"
                  style={{ marginTop: "20px" }}
                >
                  더 자세히 보기
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default cardlayout;

const cards = [
  {
    url: "https://i.imgur.com/JUO7khG.png",
    title: "웹표준 사이트 만들기",
    content:
      "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 사이",
  },
  {
    url: "https://i.imgur.com/0I0e92I.png",
    title: "웹표준 사이트 만들기",
    content:
      "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 사이",
  },
  {
    url: "https://i.imgur.com/2f098WG.png",
    title: "웹표준 사이트 만들기",
    content:
      "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 사이",
  },
];
