import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux";

function AsyncUserList({ fetchUsers, userData }) {
  useEffect(() => {
    fetchUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  
  return (
    <div>
      <h2>Here is a list of users:</h2>
      {userData.loading ? (
        <h3>Loading users....</h3>
      ) : (
        userData.users?.map((user) => {
          return (
            <div key={user.id}>
              <b>{user.id}</b> {user.name}
            </div>
          );
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncUserList);
