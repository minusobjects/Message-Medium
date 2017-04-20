json.extract! user, :id, :username, :name
json.image_url asset_path(user.photo.url(:original))
