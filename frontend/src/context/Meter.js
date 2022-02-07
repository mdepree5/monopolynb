const Meter = ({rating}) => (
  <div className='meter'>
    <meter id="meter"
    min="0" max='5'
    value={rating} />
  </div>
)

export default Meter;