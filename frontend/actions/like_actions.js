import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const fetchAllLikes = (data) => dispatch => {
    return(LikeAPIUtil.likeIndex(data)
    .then(likes => dispatch(receiveAllLikes(likes)))
   );
};

export const fetchLike = (likeId) => dispatch => (
  LikeAPIUtil.likeShow(likeId)
    .then(like => dispatch(receiveLike(like)))
);

export const createLike = (like) => dispatch => {
return (
  LikeAPIUtil.likeCreate(like)
    .then(like => dispatch(receiveLike(like)))
  );
};

export const destroyLike = (like) => dispatch => {
return (
  LikeAPIUtil.likeDestroy(like)
    .then(like => dispatch(receiveLike(like)))
  );
};
