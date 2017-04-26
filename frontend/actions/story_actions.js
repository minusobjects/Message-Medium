import * as StoryAPIUtil from '../util/story_api_util';

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllStories = stories => ({
  type: RECEIVE_ALL_STORIES,
  stories
});

export const receiveStory = story => ({
  type: RECEIVE_STORY,
  story
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchAllStories = (data) => dispatch => (
  StoryAPIUtil.storyIndex(data)
    .then(stories => dispatch(receiveAllStories(stories)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchStory = (storyId) => dispatch => (
  StoryAPIUtil.storyShow(storyId)
    .then(story => dispatch(receiveStory(story)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const createStory = (story) => dispatch => {
return (
  StoryAPIUtil.storyCreate(story)
    .then(newStory => dispatch(receiveStory(newStory)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const updateStory = (story) => dispatch => {
return (
  StoryAPIUtil.storyUpdate(story)
    .then(story => dispatch(receiveStory(story)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );
};
