json.extract! user, :id, :username, :name, :follower_ids, :following_ids
json.image_url asset_path(user.photo.url(:original))
