from os import environ
from playwright.sync_api import Page

PROJECT_URL= environ["PROJECT_URL"]


def test_website(page: Page, assert_snapshot):
    # Act
    page.goto(PROJECT_URL)
    # Assert
    assert_snapshot(page)
