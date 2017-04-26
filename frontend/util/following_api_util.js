export const followingIndex = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/followings',
    dataType: 'json',
    data
  });
};

export const followingShow = (followingId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/followings/${followingId}`,
    dataType: 'json',
  });
};

export const followingCreate = (following) => {
  return $.ajax({
    method: 'POST',
    url: `/api/followings`,
    data: following
  });
};

export const followingDestroy = (following) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/followings/0`,
    data: following
  });
};
