json.extract! @user, :id, :username, :email, :name, :bio, :follower_ids, :following_ids, :followers, :following
json.image_url asset_path(@user.photo.url(:original))

json.liked_stories do
  json.array! @user.liked_stories do |story|
    json.this_is 'story'
    json.story_id story.id
    json.story_title story.title
    json.story_description story.description
    json.story_date story.date
    json.created_at story.created_at
    json.story_main_image_url story.main_image.url
    json.story_author_id story.author_id
    json.story_author_name story.author.name
    json.story_author_bio story.author.bio
    json.story_author_photo_url story.author.photo.url
  end
end

json.stories_by_followed_users do
  json.array! @user.stories_by_followed_users do |story|
    json.this_is 'story'
    json.story_id story.id
    json.story_title story.title
    json.story_description story.description
    json.story_date story.date
    json.created_at story.created_at
    json.story_main_image_url story.main_image.url
    json.story_author_id story.author_id
    json.story_author_name story.author.name
    json.story_author_bio story.author.bio
    json.story_author_photo_url story.author.photo.url
  end
end

json.stories do
  json.array! @user.stories do |story|
    json.this_is 'story'
    json.story_id story.id
    json.story_title story.title
    json.story_description story.description
    json.story_date story.date
    json.created_at story.created_at
    json.story_main_image_url story.main_image.url
    json.story_author_id story.author_id
    json.story_author_name story.author.name
    json.story_author_bio story.author.bio
    json.story_author_photo_url story.author.photo.url
  end
end

json.liked_responses do
  json.array! @user.liked_responses do |response|
    json.this_is 'response'
    json.response_id response.id
    json.response_body response.body
    json.response_date response.date
    json.created_at response.created_at
    json.response_writer_id response.writer_id
    json.response_writer_name response.writer.name
    json.response_writer_bio response.writer.bio
    json.response_writer_photo_url response.writer.photo.url
  end
end

json.responses_by_followed_users do
  json.array! @user.responses_by_followed_users do |response|
    json.this_is 'response'
    json.response_id response.id
    json.response_body response.body
    json.response_date response.date
    json.created_at response.created_at
    json.response_writer_id response.writer_id
    json.response_writer_name response.writer.name
    json.response_writer_bio response.writer.bio
    json.response_writer_photo_url response.writer.photo.url
  end
end

json.responses do
  json.array! @user.responses do |response|
    json.this_is 'response'
    json.response_id response.id
    json.response_body response.body
    json.response_date response.date
    json.created_at response.created_at
    json.response_writer_id response.writer_id
    json.response_writer_name response.writer.name
    json.response_writer_bio response.writer.bio
    json.response_writer_photo_url response.writer.photo.url
  end
end
