export const topicIndex = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/topics',
    dataType: 'json',
    data
  });
};
