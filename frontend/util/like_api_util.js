export const likeIndex = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/likes',
    dataType: 'json',
    data
  });
};

export const likeShow = (likeId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/likes/${likeId}`,
    dataType: 'json',
  });
};

export const likeCreate = (like) => {
  return $.ajax({
    method: 'POST',
    url: `/api/likes`,
    data: like
  });
};

export const likeDestroy = (like) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/0`,
    data: like
  });
};
