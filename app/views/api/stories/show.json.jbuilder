json.extract! @story, :id, :author_id, :title, :description, :body, :date
json.main_image_url asset_path(@story.main_image.url(:original))
