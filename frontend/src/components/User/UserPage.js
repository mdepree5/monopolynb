import {useParams} from 'react-router-dom';



const UserPage = () => {
  const {userId} = useParams();
  
  return (
    <div>
      <h2>User Page</h2>
      <div>{`Hello user ${userId}`}</div>
    </div>
  );
};

// onCLick={() => setCurrProperty(property)}
export default UserPage;

