import * as ResponseAPIUtil from '../util/response_api_util';

export const RECEIVE_ALL_RESPONSES = "RECEIVE_ALL_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllResponses = responses => ({
  type: RECEIVE_ALL_RESPONSES,
  responses
});

export const receiveResponse = response => ({
  type: RECEIVE_RESPONSE,
  response
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchAllResponses = (data) => dispatch => {
    return(ResponseAPIUtil.responseIndex(data)
    .then(responses => dispatch(receiveAllResponses(responses)),
      err => dispatch(receiveErrors(err.responseJSON)))
   );
};

export const fetchResponse = (responseId) => dispatch => (
  ResponseAPIUtil.responseShow(responseId)
    .then(response => dispatch(receiveResponse(response)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const createResponse = (response) => dispatch => {
return (
  ResponseAPIUtil.responseCreate(response)
    .then(response => dispatch(receiveResponse(response)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const updateResponse = (response) => dispatch => {
return (
  ResponseAPIUtil.responseUpdate(response)
    .then(response => dispatch(receiveResponse(response)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );
};
