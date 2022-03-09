import './Zodiac.css';

export default function Zodiac({ name, dates }) {
  return (
    <div className="sign">
      <img src={`${process.env.PUBLIC_URL}/zodiac_images/${name}.png`} />
      <span>{name}</span>
      <span>{dates}</span>
    </div>
  );
}
