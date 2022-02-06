import { useState } from "react";



const Meter = ({rating}) => {
  const [meter, setMeter] = useState(0);

  setInterval(() => {
      setMeter(meter => meter + 1)
  }, 100);

  return (
  <div className='meter'>
    <label htmlFor="meter">Progress Bar beta</label>
    <meter id="meter"
    min="0" max='500'
    value={meter} />
  </div>
)
}

export default Meter;