export class UserInfo {
  constructor({ nameElement, jobElement }) {
    this._nameElement = nameElement;
    this._jobElement = jobElement;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo(userInfo) {
    this._nameElement.textContent = userInfo.name.trim();
    this._jobElement.textContent = userInfo.job.trim();
}
}
