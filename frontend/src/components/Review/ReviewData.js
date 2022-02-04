
const ReviewDataLine = ({datum}) => (
  <div>
    <div>{datum.name}</div>
    <div>
      <span className='review-bar' style={{width: (100*datum.rating/5)}}/>
    </div>
    <div>{datum.rating}</div>
  </div>
)


// const ReviewData = ({ reviewData }) => { //TODO USE ACTUAL, will have to parse data from reviews??
const ReviewData = () => { //!!!! FOR TESTING
  
  const reviewData = [
    {name: 'Cleanliness', rating: 5.0},
    {name: 'Communication', rating: 5.0},
    {name: 'Check-In', rating: 4.0},
    {name: 'Accuracy', rating: 4.0},
    {name: 'Location', rating: 4.0},
    {name: 'Value', rating: 4.4},
  ];

  console.log(reviewData);
  
  return (    
    <div>
      {reviewData.map(datum => (
        <ReviewDataLine datum={datum}/>
      ))
      }
    </div>
  )
}


export default ReviewData;