function Card({ name, apellido, img, profesion }) {
  return (
    <div className="card">
      <img src={img} alt="foto" height="200px" width="200px" />
      <div>
        <p>
          {name}/{apellido}
        </p>
        <p>{profesion}</p>
      </div>
    </div>
  );
}

export default Card;
