const Github = new GitHub();

const ui = new UI();

const searchuser = document.getElementById("searchuser");

// addEventListener
searchuser.addEventListener("keyup", (e) => {
  // Get text
  const userText = e.target.value;
  if (userText !== "") {
    Github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear fields
    ui.clearProfile();
  }
});
