// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                              Date Rendering
// todo ——————————————————————————————————————————————————————————————————————————————————

router.route('/:id(\\d+)')
.get(asyncHandler(async(req, res) => {
  const userId = parseInt(req.params.id, 10);
  const queryData = await db.User.findByPk(userId, {
    include: {
      model: db.Post,
      as: 'posts',
      order: [['createdAt', 'DESC']],
      include: [{
        model: db.PostLike,
        as: 'postLikes',
      }, {
        model: db.Comment,
        as: 'comments',
      }],
    }
  });

  const posts = [];

  for(const post of queryData.posts){
    const month = [
      'Jan', 'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'
    ][post.createdAt.getMonth()];
    const day = post.createdAt.getDay() + 1;
    const year = post.createdAt.getFullYear();

    posts.push({
      date: `${month} ${day}, ${year}`,
      postId: post.id,
      title: post.title,
      content: post.content,
      likesCount: post.postLikes.length,
      commentsCount: post.comments.length,
    });
  };

  res.render('user-page', {
    title: `${queryData.firstName} ${queryData.lastName}${queryData.lastName.endsWith('s') ? '\'' : '\'s'} Page`,
    firstName: queryData.firstName,
    lastName: queryData.lastName,
    userName: queryData.userName,
    userId,
    posts,
    theUserHasWrittenAPost: queryData.posts.length
  })

}));




const array1 = [
  { guestId: 2, propertyId: 1, content: 'Mediterranean Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 1, content: 'Mediterranean Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 2, content: 'Baltic Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 2, content: 'Baltic Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 3, content: 'Oriental Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 3, content: 'Oriental Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 4, content: 'Vermont Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 2, propertyId: 4, content: 'Vermont Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 5, content: 'Connecticut Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 5, content: 'Connecticut Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 2, propertyId: 6, content: 'St. Charles Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 6, content: 'St. Charles Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 7, content: 'States Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 2, propertyId: 7, content: 'States Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 8, content: 'Virginia Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 8, content: 'Virginia Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 9, content: 'St. James Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 9, content: 'St. James Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 2, propertyId: 10, content: 'Tennessee Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 10, content: 'Tennessee Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 11, content: 'New York Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 11, content: 'New York Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 12, content: 'Kentucky Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 2, propertyId: 12, content: 'Kentucky Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 13, content: 'Indiana Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 13, content: 'Reminds me of home!', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 14, content: 'Illinois Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 14, content: 'Illinois Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 15, content: 'Atlantic Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 15, content: 'Atlantic Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 16, content: 'North Carolina Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 16, content: 'North Carolina Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 2, propertyId: 17, content: 'Pennsylvania Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 17, content: 'Pennsylvania Avenue was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 3, propertyId: 18, content: 'Park Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 2, propertyId: 18, content: 'Park Place was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 4, propertyId: 19, content: 'Boardwalk was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},
  { guestId: 5, propertyId: 19, content: 'Boardwalk was a nice place to stay at.', rating: 4, communication: 4.3, checkIn: 4.8, cleanliness: 5},

]

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                              Filter by UserId
// todo ——————————————————————————————————————————————————————————————————————————————————
// const array2 = [1, 2, 3,];
// const avg = (reviews, key) => (reviews.reduce((prev, curr) => prev + curr[key], 0)) / reviews.length;

// const data = {
//   rating: avg(array1, 'rating'),
//   communication: avg(array1, 'communication'),
//   checkIn: avg(array1, 'checkIn'),
//   cleanliness: avg(array1, 'cleanliness'),
// }

// console.log({...data, array2});

// todo ——————————————————————————————————————————————————————————————————————————————————

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                              The golden child
// todo ——————————————————————————————————————————————————————————————————————————————————
// const array2 = [1, 2, 3,];
// const avg = (reviews, key) => (reviews.reduce((prev, curr) => prev + curr[key], 0)) / reviews.length;

// const data = {
//   rating: avg(array1, 'rating'),
//   communication: avg(array1, 'communication'),
//   checkIn: avg(array1, 'checkIn'),
//   cleanliness: avg(array1, 'cleanliness'),
// }

// console.log({...data, array2});

// todo ——————————————————————————————————————————————————————————————————————————————————


// console.log('sum', sun); //152


// let data = {
//   rating: 0,

// }
// let sum = 0;

// for (const review of array1){
//   sum += review.rating
// }

// console.log('sum', sum); //152

// const sum = array1.reduce((prev, curr) => {
//   console.log(prev);
//   console.log(curr.rating);
//   prev.rating + curr.rating;

// }, array1[0].rating);

// console.log('sum', sum); //152

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                             HANDLEHOVER EVENT LISTENER LOGIC
// todo ——————————————————————————————————————————————————————————————————————————————————
// const handleHover = () => alert('hello');
//   return (
//     <div
//     onMouseEnter={handleHover}
//     >
//   )



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
// // todo ——————————————————————————————————————————————————————————————————————————————————
// // todo                             MORE DATABASE / AWS TABLES
// // todo ——————————————————————————————————————————————————————————————————————————————————
// // REACT PARALLAX TILT for them, CSS in circle bois
// const userIcons = [
//   { name: 'Thimble', link: 25 },
//   { name: 'Boot', link: 25 },
//   { name: 'Battleship', link: 25 },
//   { name: 'Howitzer', link: 25 },
// ]

// const railroads = [
//   { name: 'Reading', price: 25 },
//   { name: 'Pennsylvania', price: 25 },
//   { name: 'B & O', price: 25 },
//   { name: 'Short Line', price: 25 },
// ]

// const utilities = [
//   { name: 'Water and Electric', price: 25},
// ]

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