```js
// Sample State
{
  currentUser: {
    id: 1,
    username: "test-user",
    name: "Don Joe",
    bio: "I am a user",
    photo_url: "www.url.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  stories: {
    1: {
      story_id: 1,
      title: "Test Story",
      body: "Story content here.",
      date: "1/1/01",
      author_id: 1,
      author_name: "Don Joe",
      topic_id: 1,
      topic_name: "Cats",
      tags: {
        1: {
          id: 1
          name: "Interesting tag"
        }
      }
    }
  },
  responses: {
    response_id: 2,
    body: "Good story!",
    date: "1/2/01",
    writer_id: 3,
    writer_name: "Lon Boe"
  }
}
```
