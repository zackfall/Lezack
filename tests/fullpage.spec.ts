import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('ᛁ ᛚᛟᚡ').click();
  await page.getByRole('img', { name: 'BakuDeku Image' }).click();
  await page.getByRole('heading', { name: 'Lezack' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.locator('div').filter({ hasText: 'Normal DayDomingo de chillUn domingo normal de el y yo pasando el día.' }).nth(4).click();
  await page.locator('section').filter({ hasText: 'Last Post Normal DayDomingo de chillUn domingo normal de el y yo pasando el día.' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByText('Normal Day').first().click();
  await page.locator('section').filter({ hasText: 'Last Post Normal DayDomingo de chillUn domingo normal de el y yo pasando el día.' }).getByRole('link').click();
  await page.getByRole('img', { name: 'idv' }).click();
  await page.getByText('Aunque fue un día normal, fue divertido y bonito el pasar con él, después de jug').click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.locator('li').filter({ hasText: 'Normal DayDomingo de chillUn domingo normal de el y yo pasando el día.' }).getByRole('link').click();
  await page.getByRole('heading', { name: 'Domingo de chill' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByText('ᛁ ᛚᛟᚡ').click();
  await page.getByText('ᛖ ᚤᛟᚢ').click();
  await page.getByText('Made with ❤️ for my beloved Leo').click();
  await page.locator('[id="__next"] div').filter({ hasText: 'ZackI am myself haha. I am Leo\'s boyfriend and I don\'t have nothing special to s' }).nth(3).click();
  await page.locator('[id="__next"] div').filter({ hasText: 'LeoLeo is a really cute boy, he is very kind and affectionate and although he se' }).nth(3).click();
});