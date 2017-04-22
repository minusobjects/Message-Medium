export const storyIndex = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/stories',
    dataType: 'json',
    data
  });
};

export const storyShow = (storyId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/stories/${storyId}`,
    dataType: 'json',
  });
};
