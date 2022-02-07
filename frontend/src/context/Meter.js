// import { useState } from "react";



const Meter = ({rating}) => {
  console.log('debugger');
  console.log(rating)
  // const [meter, setMeter] = useState(0);

  // setInterval(() => {
  //     setMeter(meter => meter + 1)
  // }, 100);

  return (
  <div className='meter'>
    <meter id="meter"
    min="0" max='500'
    value={rating} />
  </div>
)
}

export default Meter;