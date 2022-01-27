
## About this project

This is the front end for a local concert calendar. It pulls data from a static json, which is compiled locally by a Java/Selenium scraper. Its primary features are a streamlined UI and the ability for users to preview artists. The preview is imperfect - it plays YouTube videos based on a simple search for the artist's name, which works about 90-95% of the time.

## Work in Progress notes

This is a work in progress, shared to demonstrate a nuts-and-bolts understanding of function-based, componentized React with Hooks, and basic unit testing. I am aware of some flaws, and will be improving this as time allows.

- Testing is fairly rudimentary. At some point, I will make the tests more robust and include tests for the Preview component, mocking the YouTube API

- My YouTube API key is in the code itself. I wanted to hash out the essential functionality, and will soon replace this with proper OAUth2 authorization.

- Some helpful features are still lacking. Notably, a modal date selector to jump to a specific date, and the ability to filter listings to omit venues

- There are a few issues with the scraper and its configuration metadata, particularly one that writes duplicate entries of some events