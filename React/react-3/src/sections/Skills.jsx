export default function Skills({ img }) {
  return (
    <div>
      <img
        src={img}
        alt="Skill"
        className="w-50 h-50 object-contain rounded-full"
      />
    </div>
  );
}
