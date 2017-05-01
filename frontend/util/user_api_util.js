export const userShow = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
    dataType: 'json',
  });
};

export const userUpdate = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: user
  });
};
