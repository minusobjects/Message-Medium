json.extract! @user, :id, :username, :email, :name, :bio, :photo_url
json.image_url asset_path(@user.photo.url(:original))
