Feature: Create user and Longin

I want to create profile

  Scenario: Create user and Longin
  Given I am open Linkedin's index page to create user
  When I am typing my Name test "Prueba" on Name input
  When I am typing my lastName test "TestCafe" on lastName input
  When I am typing my mail test "pruebatestcafe@gmail.com" on mail reg input
  When I am typing my pass test "qwerty1234" on pass reg input
  Then I am click on resgistration button
