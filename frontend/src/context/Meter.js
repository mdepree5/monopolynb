import { useState } from "react";

const Meter = () => {
  const [meter, setMeter] = useState(0);

  setInterval(() => {
      setMeter(meter => meter + 1)
  }, 100);

  return (
  <div className='meter'>
    <label htmlFor="fuel">Progress Bar beta</label>
    <meter id="fuel"
    min="0" max="100"
    value={meter} />
  </div>
)
}

export default Meter;