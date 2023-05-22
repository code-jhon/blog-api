Feature: API Endpoints

  Scenario: Get all blog posts
    Given the application is running
    When I make a GET request to "/posts"
    Then the response status code should be 200
    And the response body should have property "data"
    And the response body should have property "total"

  Scenario: Create a new blog post
    Given the application is running
    When I make a POST request to "/posts" with body:
      """
      {
        "title": "New Blog Post",
        "content": "This is a new blog post."
      }
      """
    Then the response status code should be 201
    And the response body property "title" should be "New Blog Post"
    And the response body property "content" should be "This is a new blog post."
