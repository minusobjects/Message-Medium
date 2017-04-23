import * as ResponseAPIUtil from '../util/response_api_util';

export const RECEIVE_ALL_RESPONSES = "RECEIVE_ALL_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";

export const receiveAllResponses = stories => ({
  type: RECEIVE_ALL_RESPONSES,
  stories
});

export const receiveResponse = response => ({
  type: RECEIVE_RESPONSE,
  response
});

export const fetchAllResponses = (data) => dispatch => (
  ResponseAPIUtil.responseIndex(data)
    .then(stories => dispatch(receiveAllResponses(stories)))
);

export const fetchResponse = (responseId) => dispatch => (
  ResponseAPIUtil.responseShow(responseId)
    .then(response => dispatch(receiveResponse(response)))
);

export const createResponse = (response) => dispatch => {
return (
  ResponseAPIUtil.responseCreate(response)
    .then(response => dispatch(receiveResponse(response)))
  );
};

export const updateResponse = (response) => dispatch => {
return (
  ResponseAPIUtil.responseUpdate(response)
    .then(response => dispatch(receiveResponse(response)))
  );
};
