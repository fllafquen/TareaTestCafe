Feature: Login and search a contact in my network and see a person's profile

I want to login and search a contact in my network and see a person's profile

  Scenario: Login and search a contact in my network and see a person's profile
    Given I am open Linkedin's index page to login
    When I am typing my mail test "pruebatestcafe@gmail.com" on mail login input
    When I am typing my pass test "qwerty1234" on pass login input
    When I am click on Login button
    When I am click on my contact network "Francisco"

    Scenario: Login and create work experience
      Given I am open Linkedin's index page to login
      When I am typing my mail test "pruebatestcafe@gmail.com" on mail login input
      When I am typing my pass test "qwerty1234" on pass login input
      When I am click on Login button
      When I am click on my profile
      When I am click on my add section
      When I am click on work experience
