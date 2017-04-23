export const responseIndex = (data) => {
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
    processData: false,
    contentType: false,
    dataType: 'json',
    data: response
  });
};

export const responseUpdate = (response) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/responses/${response.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: response
  });
};
