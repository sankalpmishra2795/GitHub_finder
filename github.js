class GitHub {
  constructor() {
    this.client_id = "4dc8b9c838904d8ac7f1";
    this.client_secret = "68d894346df142ae17463f591e8bfc291b0de53e";
    this.repos_count = 5;
    this.repose_short = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repose_count}&sort=${this.repose_short}   client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
