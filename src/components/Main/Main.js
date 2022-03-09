import Zodiac from '../Zodiac/Zodiac';
import './Main.css';
import { zodiac } from '../../data';

import background from '../../bacground_img.jpg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((sign) => (
        <Zodiac key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  );
}
