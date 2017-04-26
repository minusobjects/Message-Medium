json.extract! @user, :id, :username, :email, :name, :bio, :photo_url, :follower_ids, :following_ids
json.image_url asset_path(@user.photo.url(:original))
