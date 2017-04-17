# API Endpoints

## HTML API

### Root

- `GET /` - loads React app

## JSON API

### Users
- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:userId` - view user profile page

### Session
- `POST /api/session`
- `DELETE /api/session`

### Stories
- `GET /api/stories`
- `POST /api/stories`
- `PATCH /api/stories/:storyId`
- `DELETE /api/stories/:storyId`

### Responses
- `GET /api/responses` - should be able to query by story or by user
- `POST /api/responses/:storyId`
- `DELETE /api/responses/:responseId`

### Tags
- `GET /api/tags`
- `POST /api/tags`
- `DELETE /api/tags/:tagId` - individual users probably should not be able to delete tags, however

### Taggings
- `GET /api/taggings` - should be able to query by story or by tag
- `POST /api/taggings/:storyId` - also pass in :tagId; add tag to story
- `DELETE /api/taggings/:storyId` - also pass in :tagId; remove tag from story

### RelatedTags
- `GET /api/related_tags/:tagId`
- `POST /api/related_tags/:tagId` - pass in other tag id's to assign related tags
- `DELETE /api/related_tags/:tagId` - pass in other tag id's to remove related tags

### FollowedTags
- `GET /api/followed_tags/:tagId`
- `POST /api/followed_tags/:userId` - pass in :tagId to follow tag
- `DELETE /api/followed_tags/:userId` - pass in :tagId to stop following tag

### Topics
- `GET /api/topics/:topicId`

### FollowedTopics
- `GET /api/followed_topics/:topicId`
- `POST /api/followed_topics/:userId` - pass in :topicId to follow topic
- `DELETE /api/followed_topics/:userId` - pass in :topicId to stop following topic

### Followings
- `GET /api/followings/:followerId`
- `POST /api/followings/:followerId` - also pass in :followingId; user follows another user
- `DELETE /api/followings/:followerID` - also pass in :followingId; user stops following another user

### Highlights
- `GET /api/highlights/:storyId` - get all highlights for a story
- `POST /api/highlights/:storyId` - also pass in highlight data; add highlight to a story
- `DELETE /api/highlights/:highlightId` - remove highlight

### Likes
- `GET /api/likes` - query by user (things liked by user), story, or response
- `POST /api/likes/:userId` - user can like a story or a response
- `DELETE /api/likes/:userId` - user can unlike a story or a response
