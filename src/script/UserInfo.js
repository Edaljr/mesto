export class UserInfo {
  constructor({ nameElement, jobElement }) {
    this._nameInputElement = nameElement;
    this._jobInputElement = jobElement;
  }

  getUserInfo() {
    return {
      name: this._nameInputElement.value,
      job: this._jobInputElement.value,
    };
  }

  setUserInfo(selectors, userInfo) {
    selectors.subTitle.textContent = userInfo.job.trim();
    selectors.title.textContent = userInfo.name.trim();
  }
}
