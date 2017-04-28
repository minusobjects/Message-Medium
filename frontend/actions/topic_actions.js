import * as TopicAPIUtil from '../util/topic_api_util';

export const RECEIVE_ALL_TOPICS = "RECEIVE_ALL_TOPICS";

export const receiveAllTopics = topics => ({
  type: RECEIVE_ALL_TOPICS,
  topics
});

export const fetchAllTopics = (data) => dispatch => {
    return(TopicAPIUtil.topicIndex(data)
    .then(topics => dispatch(receiveAllTopics(topics)))
   );
};
