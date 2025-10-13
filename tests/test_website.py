from os import environ

from playwright.sync_api import Page

PROJECT_URL = environ["PROJECT_URL"]


def test_website_title(page: Page) -> None:
    """Test that the website title is 'Travel Map'."""
    # Act
    page.goto(PROJECT_URL)
    # Assert
    assert page.title() == "Travel Map"
