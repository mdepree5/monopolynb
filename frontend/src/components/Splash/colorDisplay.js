const ColorDisplay = () => {
  const colors = ['brown', 'skyblue', 'orchid', 'orange', 'red', 'yellow', 'green', 'blue'];

  return (
    <div className='cards-container'>
      {colors.map(color => (
        <div className='card' key={color}>
          <div className='card-header'id={color}/>
          <div>{color}</div>
        </div>
      ))
      }
    </div>
  );
}


export default ColorDisplay;