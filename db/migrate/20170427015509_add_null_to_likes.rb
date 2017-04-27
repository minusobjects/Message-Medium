class AddNullToLikes < ActiveRecord::Migration[5.0]
  def change
    change_column_null :likes, :story_id, true
  end
end
