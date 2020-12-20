const assert = require('assert')

/* eslint-disable no-undef */
Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

xScenario('showing empty liked restaurants', ({ I }) => {
  I.see('You haven\'t chosen your favorite restaurant', '.not-exist')
})

xScenario('liking one restaurant', async ({ I }) => {
  I.see('You haven\'t chosen your favorite restaurant', '.not-exist')

  I.amOnPage('/')
  // pause()
  I.seeElement('button-comp button.btn-detail1')

  const firstRestaurant = locate('.card-text h2').first()
  // const firstButtonDetails = locate('button-comp #btn-detail').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)

  I.scrollTo('.card')
  I.click('#btn-detail1')

  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card-text h2')
  const favoritedFilmTitle = await I.grabTextFrom('.card-text h2')

  assert.strictEqual(firstRestaurantTitle, favoritedFilmTitle)
})

Scenario('Unliking a restaurant', async ({ I }) => {
  I.see('You haven\'t chosen your favorite restaurant', '.not-exist')

  I.amOnPage('/')
  // pause()
  I.seeElement('button-comp button.btn-detail1')

  const firstRestaurant = locate('.card-text h2').first()
  // const firstButtonDetails = locate('button-comp #btn-detail').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)

  I.scrollTo('.card')
  I.click('#btn-detail1')

  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card-text h2')
  const favoritedRestaurantTitle = await I.grabTextFrom('.card-text h2')

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle)

  I.scrollTo('.card')
  I.click('#btn-detail1')

  I.seeElement('#favoritedButton')
  I.click('#favoritedButton')

  I.amOnPage('/#/favorite')
  I.see('You haven\'t chosen your favorite restaurant', '.not-exist')
})