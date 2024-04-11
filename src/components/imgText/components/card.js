function Card({ imgURL, byonName, btnColor }) {
  return (
    <div
      className="imgText-card img"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="round-btn" style={{ backgroundColor: btnColor }}>
        {byonName}
      </div>
    </div>
  );
}

export default Card;
