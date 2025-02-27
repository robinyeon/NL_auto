import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('https://www.nl.go.kr/');
});

test('팝업 닫고 검색어 입력', async ({ page }) => {
  const popupCloseButtons = page.locator("a[onclick*='fn_popupClose']");
  const count = await popupCloseButtons.count();

  if (count > 0) {
    await popupCloseButtons.first().click();
    console.log('팝업 닫기');
  }

  const searchInput = page.locator('#main_input-text1, #main_input-text2'); // 반응형 대응
  await searchInput.first().fill('호빗');
  console.log("검색어 '호빗' 입력");
});
