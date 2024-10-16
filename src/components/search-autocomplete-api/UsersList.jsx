/* eslint-disable react/prop-types */
const UsersList = ({ data }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((user) => {
            return (
              <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
            );
          })
        : null}
    </ul>
  );
};

export default UsersList;
