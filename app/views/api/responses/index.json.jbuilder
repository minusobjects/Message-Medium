@responses.each do |response|
  json.set! response.id do
    json.partial! 'response', response: response
  end
end
