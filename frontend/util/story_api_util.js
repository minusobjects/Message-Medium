export const storyIndex = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/stories',
    dataType: 'json',
  });
};

export const storyShow = (storyId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/stories/${storyId}`,
    dataType: 'json',
  });
};
