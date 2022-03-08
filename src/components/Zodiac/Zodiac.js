import './Zodiac.css';

export default function Zodiac() {
  return (
    <div className="sign">
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} />
      <span>Aquarius</span>
      <span>Jan 21 - Feb - 19</span>
    </div>
  );
}
