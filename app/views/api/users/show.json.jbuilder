json.extract! @user, :id, :username, :email, :name, :bio, :follower_ids, :following_ids, :followers, :following, :stories_by_followed_users, :responses_by_followed_users, :liked_stories, :liked_responses
json.image_url asset_path(@user.photo.url(:original))
