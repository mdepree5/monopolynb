import './Form.css';

export const Form = ({onSub, errors, buttonName, children}) => (
  <>
    <form className='form' onSubmit={onSub}>
      {children}
      <button className='form-button' type='submit' >{buttonName}</button>
    </form>
    <ul className='form-errors'>
      {errors.map((error, id) => (
        <li key={id}>{error}</li>
      ))}
    </ul>
  </>
)


export const FormInput = ({ type, name, state, setState }) => {
  const formatName = name.toLowerCase().split(' ').join('-');

  return (
  <div className={`${formatName}-input form-input`}>
    <label htmlFor={`${formatName}`} />
    <input 
      type={type || 'text'}
      id={`${formatName}`} 
      value={state}
      onChange={e => setState(e.target.value)}
      placeholder={`${name}`}
      />
  </div>
  ) 
}





// !!!! ——————————————————————————————————————————————————————————————————————————————————
// !!!!                                 Form Code might not use
// !!!! ——————————————————————————————————————————————————————————————————————————————————


// export const formFields = {
//   register: ['Username', 'First Name', 'Last Name', 'Email'],
//   login: ['Username', 'Email'],
// }

// export const Form = ({name, fields, onSub = formSubMethod.windowAlert}) => {
//   const handleSubmit = event => {
//     event.preventDefault();
//     const data = [];
//     for(const userInput of event.target.elements) {
//       if(userInput.nodeName !== 'BUTTON') data.push(` ${userInput.value ? `'${userInput.value}'` : 'no input'} for your ${userInput.id.split('-').join(' ')}`);
//     }
//     onSub(data);
//   }

//   const FormInput = ({name}) => {
//     const formatName = name.toLowerCase().split(' ').join('-');
//     return (
//     <div className={`${formatName}Field`}>
//       <label htmlFor={`${formatName}Input`}>{`${name}: `}</label>
//       <input id={`${formatName}`} type='text' />
//     </div>
//     ) 
//   }

//   return (
//     <div className='theForm'>
//       <h1>{name}</h1>
//       <form onSubmit={handleSubmit}>
//         {fields.map(field => (
//             <FormInput key={field} name={field} />
//           ))}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }


// const formSubMethod = {
//   windowAlert: function(data){
//     alert(`You provided: ${data}`)
//   },
//   displayOnPage: function(data){
//     const messages = document.getElementById('messages');
//     const youProvided = document.createElement('div');
//     youProvided.innerHTML = 'You Provided: ';
//     messages.prepend(youProvided);

//     const ulList = document.getElementById('list');

//     data.forEach(datum => {
//       const newLi = document.createElement('li');
//       newLi.key = datum;
//       newLi.innerHTML = datum;
//       ulList.appendChild(newLi);
//     })
//   },
//   buildInDatabase: function(data){
      
//   }
// }
