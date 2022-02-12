import './Form.css';

export const Form = ({onSub, errors, buttonName, children}) => (
  <>
    <form className='form' onSubmit={onSub}>
      {children}
      <button className='form-button' type='submit' >{buttonName}</button>
    </form>
    <ul className='form-errors'>
      {errors.filter(error => error !== 'Invalid value')
        .map((error, id) => (
          <li key={id}>{error}</li>
        ))
      }
    </ul>
  </>
)


export const FormInput = ({ type, name, state, setState }) => {
  const formatName = name.toLowerCase().split(' ').join('-');

  return (
  <ul className='form-input'>
    <li><label htmlFor={formatName}>{name}</label></li>
    <li><input 
      type={type || 'text'}
      id={formatName} 
      value={state}
      onChange={e => setState(e.target.value)}
      placeholder={name}
      required={false}
      /></li>
      
  </ul>
  ) 
}
