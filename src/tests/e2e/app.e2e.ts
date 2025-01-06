import { browser, expect } from "@wdio/globals";
import AppPage from "../pages/app.page";

describe("Application", () => {
  before(async () => {
    // Инициализация страницы
    await AppPage.open();
  });
  it("search should work", async () => {
    await AppPage.searchLocation("1.1.1.1");

    // Ждём 5 секунд для завершения запроса на сервер
    await browser.pause(5000);

    // Получаем текст из элемента
    const locationInfoText = await AppPage.LocationInfo.getText();

    // Проверяем, что текст содержит ожидаемый IP-адрес
    expect(locationInfoText).toContain("Cloudflare");
  });
});
