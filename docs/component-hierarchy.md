## Component Hierarchy

**AuthFormContainer**
- AuthForm
- ErrorsComponent

**HomeContainer**
- HomeNav
+ UserSidebar
  - TagsYouFollow
+ StoriesFeed
  - StoriesFeedItem

**StoryContainer**
- InteriorNav
- StorySidebar
- StoryFooter
- StoryContent
- StoryTags
+ RelatedStories
  - RelatedStory
+ ResponseSectionContainer
  - ResponseInput
  + Responses
    - Response
  - ErrorsComponent

**FilteredFeedContainer**
- InteriorNav
+ UserSidebar
  - RelatedTags
  - TagsYouFollow
+ StoriesFeed
  - FeedData
  - StoriesFeedItem

**StoryInputContainer**
- StoryInputNav
  + PublishOptions
    - AddTags
- StoryInput
- StoryInputFooter

**UserProfileContainer**
- InteriorNav
+ UserHeader
  - EditProfile
  - UsersFollowing
  - UsersFollowed
+ UserProfileFeed
  - UserProfileItem
+ UserStoriesFeed
  - UserStoriesFeedItem
+ UserRecommendsFeed
  - UserRecommendsFeedItem
+ UserResponsesFeed
  - UserResponsesFeedItem

**SearchPageContainer**
- InteriorNav
- SearchField
- SearchResultsSidebar

## Routes

|Path   | Component   |
|-------|-------------|
| '/sign-up' | 'AuthFormContainer' |
| '/sign-in' | 'AuthFormContainer' |
| '/home' | 'HomeContainer' |
| '/new-story' | 'StoryInputContainer' |
| '/search' | 'SearchPageContainer' |
| '/:userId/:storyId' | 'StoryContainer' |
| '/tag/:tagId' | 'FilteredFeedContainer' |
| '/tag/:topicId' | 'FilteredFeedContainer' |
| '/:userId' | 'UserProfileContainer' |
