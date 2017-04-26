json.extract! story, :id, :author_id, :title, :description, :date, :likers, :likes, :created_at, :updated_at
json.author_name story.author.name
json.author_photo_url asset_path(story.author.photo.url(:original))
json.main_image_url asset_path(story.main_image.url(:original))
