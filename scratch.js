/* 
UNSTABLE property reducer case
case CREATE_ONE: 
return {
    ...state,
    listOfProperties: {
      ...state.listOfProperties,
      [action.property.id]: action.property
    }
  };
 */
/* 

components/property/propertypage
  const state = useSelector(state => state.property);
  const property = useSelector(state => state.property[propertyId]);

  console.log('state', state)
  console.log('property', property);
  


store/property
case GET_ONE:
  return {
    ...state,
    [action.property.property.id]: {
      ...state[action.property.property.id],
      ...action.property.property
    }
  };
  
 */
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                             MORE DATABASE / AWS TABLES
// todo ——————————————————————————————————————————————————————————————————————————————————
// REACT PARALLAX TILT for them, CSS in circle bois
const userIcons = [
  { name: 'Thimble', link: 25 },
  { name: 'Boot', link: 25 },
  { name: 'Battleship', link: 25 },
  { name: 'Howitzer', link: 25 },
]

const railroads = [
  { name: 'Reading', price: 25 },
  { name: 'Pennsylvania', price: 25 },
  { name: 'B & O', price: 25 },
  { name: 'Short Line', price: 25 },
]

const utilities = [
  { name: 'Water and Electric', price: 25},
]

/*
Review seed data:

'' is a great host!!

'' I have stayed here many, many times.

'' The rent is so high!

*/




/* 
Mediterranean Avenue
Baltic Avenue

Oriental Avenue
Vermont Avenue
Connecticut Avenue

St. Charles Place
States Avenue
Virginia Avenue

St. James Place
Tennessee Avenue
New York Avenue

Kentucky Avenue
Indiana Avenue
Illinois Avenue

Atlantic Avenue
North Carolina Avenue
Pennsylvania Avenue

Park Place
Boardwalk

Electric Company //todo These can be additional booking fees
Water Works //todo These can be additional booking fees

Reading Railroad
Pennsylvania Railroad
B & O Railroad
Short Line



//* Mega Edition
Arctic Avenue
Massachusetts Avenue
Maryland Avenue
New Jersey Avenue
Michigan Avenue
California Avenue
South Carolina Avenue
Florida Avenue
Gas Company


//* Tokens
Money Bag
Iron
Horse and Rider
Howitzer
Scottie Dog
Thimble
Top hat
Shoe
Battleship
Car
Wheelbarrow



//* UK edition
Old Kent Road
Whitechapel Road

The Angel Islington
Euston Road
Pentonville Road

Pall Mall
Whitehall
Northumberland Avenue

Bow Street
Marlborough Street
Vine Street

The Strand
Fleet Street
Trafalgar Square

Leicester Square
Coventry Street
Piccadilly

Regent Street
Oxford Street
Bond Street

Park Lane
Mayfair


404 Go to jail!
Get out of Jail Free card: Return to Home

*/