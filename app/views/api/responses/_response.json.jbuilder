json.extract! response, :id, :writer_id, :story_id, :in_response_id, :body, :date, :likers, :likes
json.writer_name response.writer.name
json.writer_photo_url asset_path(response.writer.photo.url(:original))
