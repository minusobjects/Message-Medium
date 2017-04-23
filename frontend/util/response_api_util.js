export const responseIndex = (data) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: '/api/responses',
    dataType: 'json',
    data
  });
};

export const responseShow = (responseId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/responses/${responseId}`,
    dataType: 'json',
  });
};

export const responseCreate = (response) => {
  return $.ajax({
    method: 'POST',
    url: `/api/responses`,
    data: response
  });
};

export const responseUpdate = (response) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/responses/${response.id}`,
    data: response
  });
};
