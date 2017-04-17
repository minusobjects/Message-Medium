# Message

Heroku link TK

[Trello link][trello]
[trello]: https://trello.com/b/XmbpaiSW/medium-clone


## Minimum Viable Product
Message is a single-page web-application inspired by Medium, built using Ruby on Rails, React/Redux, and QuillJS. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:
- [ ] New account creation, login, and guest/demo login.
- [ ] Users can write stories.
- [ ] Users can add comments ('responses') to stories.
- [ ] Users can follow other users and view a feed of relevant stories.
- [ ] Users can 'like' stories and comments.
- [ ] A production README.
- [ ] Hosting on Heroku.
- [ ] Bonus: Stories are organized by topics.
- [ ] Bonus: Users can bookmark stories.
- [ ] Bonus: Users can highlight sections of stories.


## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes/
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md


## Implementation Timeline

### Phase 1: Backend setup and authentication (2 days)

**Objective:** Functioning Rails project with front-end auth.

### Phase 2: Story model, API (2 days)

**Objective:** Users can post stories; stories can be modified via API.

### Phase 3: Responses (1 day)

**Objective:** Users can post responses; responses can be modified via API.

### Phase 4: Tags (maybe Topics) (1 day)

**Objective:** Stories can be tagged, and tags can be set as relevant to other tags. Stories may also belong to topics (bonus).

### Phase 5: Likes (1 day)

**Objective:** Users can 'like' (and unlike) stories and responses.

### Phase 6: Following/Feeds/Profiles (2 days)

**Objective:** Users can follow other users; users have their own feeds of stories; each user's profile has a feed of their own content.

### Phase 7: Search (1 day)

**Objective:** Users can search for stories, users and tags.

### Phase 8: Allow complex styling in stories (1 day)

**Objective:** Users can style the text in their stories and add images.

### Bonus Features (tbd)
- [ ] Stories are categorized by topics.
- [ ] Add highlights (users can highlight other users' stories)
- [ ] Add bookmarks (users can bookmark other users' stories)
