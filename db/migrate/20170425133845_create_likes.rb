class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :story_id, null: false
      t.integer :response_id

      t.timestamps
    end
  end
end
