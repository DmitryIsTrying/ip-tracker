import { $ } from "@wdio/globals";
import Page from "./page.js";

class AppPage extends Page {
  public get LocationInfo() {
    return $('[data-testid="location-info"]');
  }
  public get inputSearch() {
    return $('[data-testid="input-test"]');
  }

  public get btnSubmit() {
    return $('[data-testid="btn-test-black"]');
  }

  public async searchLocation(search: string) {
    await this.inputSearch.waitForDisplayed({ timeout: 5000 });
    await this.inputSearch.click();
    await this.inputSearch.setValue(search);

    await this.btnSubmit.waitForEnabled({ timeout: 5000 });
    await this.btnSubmit.click();
  }

  public open() {
    return super.open("/");
  }
}

export default new AppPage();
