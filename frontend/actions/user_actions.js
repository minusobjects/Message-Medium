import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const START_LOADING_USER = 'START_LOADING_USER';

// export const receiveAllUsers = users => ({
//   type: RECEIVE_ALL_USERS,
//   users
// });

export const startLoadingUser = () => ({
  type: START_LOADING_USER
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// export const fetchAllUsers = (data) => dispatch => (
//   UserAPIUtil.userIndex(data)
//     .then(users => dispatch(receiveAllUsers(users)),
//     err => dispatch(receiveErrors(err.responseJSON)))
// );

export const fetchUser = (userId) => (dispatch) => {
  dispatch(startLoadingUser());
  return(
  UserAPIUtil.userShow(userId)
    .then(user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );
}

export const updateUser = (user) => dispatch => {
return (
  UserAPIUtil.userUpdate(user)
    .then(user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );
};
