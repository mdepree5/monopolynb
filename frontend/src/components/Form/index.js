import './Form.css';

export const Form = ({onSub, validationErrors, errors, buttonName, children}) => (
  <>
    <form className='col-list' onSubmit={onSub}>
      {children}
      <button className='form-button' type='submit' disabled={validationErrors.length > 0} >{buttonName}</button>
    </form>
    
    {validationErrors.length > 0 && (<>
      <div>Before You Submit...</div>
      <div className='line'></div>
    </>)}

    <ul className='state-errors'>
      {validationErrors.length > 0 && validationErrors.map(error => 
        <li key={error} className='error'>{error}</li>
      )}
    </ul>

    <ul className='form-errors'>
      {errors.lenth > 0 && (<li className='line'></li>)}
      {errors.length > 0 && errors.filter(error => error !== 'Invalid value')
        .map((error, id) => <li key={id}>{error}</li> )
      }
    </ul>
  </>
)


export const FormInput = ({ type, name, state, setState }) => {
  const formatName = name.toLowerCase().split(' ').join('-');

  return (
  <div className='form-input'>
    <label htmlFor={formatName}>{name}</label>
    <input 
      className='inputField'
      type={type || 'text'}
      id={formatName} 
      value={state}
      onChange={e => setState(e.target.value)}
      placeholder={name}
      required={false}
    />
  </div>
  ) 
}

export const NumberInput = ({ min, name, state, setState }) => {
  const formatName = name.toLowerCase().split(' ').join('-');

  return (
  <div className='number-input'>
    <label htmlFor={formatName}>{name}</label>
    <input 
      className='inputField'
      min={min}
      type='number'
      id={formatName} 
      value={state}
      onChange={e => setState(e.target.value)}
      placeholder={name}
      required={false}
    />
  </div>
  ) 
}

// const [input, setInput] = useState('')
// const handleChange = event => {
//   setInput(event.target.value.toLowerCase())
// }