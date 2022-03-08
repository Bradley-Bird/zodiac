import './Zodiac.css';

export default function Zodiac({ name, dates }) {
  console.log(name, dates);
  return (
    <div className="sign">
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} />
      <span>{name}</span>
      <span>{dates}</span>
    </div>
  );
}
