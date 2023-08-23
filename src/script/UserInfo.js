import { profileTitle, profileSubtitle } from "../data/constants.js";

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

  setUserInfo(userInfo) {
    profileSubtitle.textContent = userInfo.job.trim();
    profileTitle.textContent = userInfo.name.trim();
  }
}
