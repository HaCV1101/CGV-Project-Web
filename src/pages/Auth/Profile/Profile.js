function Profile() {
  //select user login and show info
  const user = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action active"
              >
                Profile
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Booking
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Change Password
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <h4>Profile</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-9">
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>Username:</td>
                          <td>{user.user.name}</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>{user.user.email}</td>
                        </tr>
                        <tr>
                          <td>Phone Number:</td>
                          <td>{user.user.phone}</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="/edit-profile" className="btn btn-primary">
                      Edit Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
