function Boton({ text, onClick }) {
  return (
    <button className="boton" onClick={onClick}>
      {text}
    </button>
  );
}

export default Boton;
