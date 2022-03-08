import Zodiac from '../Zodiac/Zodiac';
import './Main.css';
import { zodiac } from '../../data';

export default function Main() {
  return (
    <main>
      {zodiac.map((sign) => (
        <Zodiac key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  );
}
