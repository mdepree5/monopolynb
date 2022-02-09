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

/* 
todo CSS
.cards-container{
  display: flex;
  flex-direction: row;
}

.card{
  width: 100px;
  height: 150px;
  border: solid black 2px;
  border-radius: 3px;
  text-align: center;
  margin: 5px;
}


.card:hover {
  border: solid gray 2px;
  box-shadow: 0px 50px 20px 2px black;
  box-shadow: 0 1px 10px gray;
  color: gray;
  transform: translateY(-20px);
}

.card-header{
  width: 100px;
  height: 50px;
  border-bottom: solid black 2px;
}



*/