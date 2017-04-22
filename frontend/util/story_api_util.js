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

export const storyCreate = (story) => {
  return $.ajax({
    method: 'POST',
    url: `/api/stories`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: story
  });
};

export const storyUpdate = (story) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/stories/${story.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: story
  });
};
