class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class = "card card-body mb-3">
      <div class = "row">
      <div class = "col-md-3">
      <img class = "img-fluid mb-2" src ="${user.avatar_url}">
      <a href ="${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-4" >View Profile</a>
      </div>
      <div class = "col-md-9">
      <span class = "badge badge-primary">Public Repos:${user.public_repose}</span>
      <span class = "badge badge-primary">Public Repos:${user.public_gists}</span>
      <span class = "badge badge-primary">Public Repos:${user.followers}</span>
      <span class = "badge badge-primary">Public Repos:${user.follwing}</span> 
      <br><br>
      <ul class ="list-group">
      <li class = "list-group-item">Company: ${user.company}</li>
      <li class = "list-group-item">Website/Blogs: ${user.blogs}</li>
      <li class = "list-group-item">Location: ${user.location}</li>
      <li class = "list-group-item">Member Since: ${user.create_at}</li>

      </ul>
      </div>
      </div>
      </div>

      <h3 class = "page-heading mb-3">Letest Repose</h3>
      <div id = "repos"></div>
      `;
  }
  // user repose
  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
            <div class = "card card-body mb-2">
            <div class ="row">
            <div class = "col-md-6">
            <a href = "${repo.html_url}" target = "_blank">${repo.name}</a>
            </div>
            <div class = "col-md-6">
            <span class = "badge badge-primary">Stars:${repo.stargazer_count}</span>
            <span class = "badge badge-primary">Watchers:${repo.watchers_count}</span>
            <span class = "badge badge-primary">Forks:${repo.form_count}</span>
            </div>
            
            </div>
            </div>
            `;
    });

    // output repose
    document.getElementById("repos").innerHTML = output;
  }

  //   clear field
  clearProfile() {
    this.profile.innerHTML = "";
  }

  //   show alert
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchcontainer");
    const search = document.querySelector(".search");

    container.insertBefore(div, search);
    // timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //   clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
