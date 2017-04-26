import * as FollowingAPIUtil from '../util/following_api_util';

export const RECEIVE_ALL_FOLLOWINGS = "RECEIVE_ALL_FOLLOWINGS";
export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";

export const receiveAllFollowings = followings => ({
  type: RECEIVE_ALL_FOLLOWINGS,
  followings
});

export const receiveFollowing = following => ({
  type: RECEIVE_FOLLOWING,
  following
});

export const fetchAllFollowings = (data) => dispatch => {
    return(FollowingAPIUtil.followingIndex(data)
    .then(followings => dispatch(receiveAllFollowings(followings)))
   );
};

export const fetchFollowing = (followingId) => dispatch => (
  FollowingAPIUtil.followingShow(followingId)
    .then(following => dispatch(receiveFollowing(following)))
);

export const createFollowing = (following) => dispatch => {
return (
  FollowingAPIUtil.followingCreate(following)
    .then(following => dispatch(receiveFollowing(following)))
  );
};

export const destroyFollowing = (following) => dispatch => {
return (
  FollowingAPIUtil.followingDestroy(following)
    .then(following => dispatch(receiveFollowing(following)))
  );
};
