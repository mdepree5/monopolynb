import PropertyList from '../Property/PropertyList';

import Meter from '../../context/Meter';

const Splash = () => {

  const colors = ['brown', 'skyblue', 'orchid', 'orange', 'red', 'yellow', 'green', 'blue'];

  return (
    <>
      <Meter rating={80}/>
      <div className='cards-container'>
        {colors.map(color => (
          <div className='card' key={color}>
            <div className='card-header'id={color}/>
            <div>{color}</div>
          </div>
        ))
        }
      </div>
      <div>
        <PropertyList />
      </div>
    </>
  );
}


export default Splash;