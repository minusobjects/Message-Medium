class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :description
      t.text :body, null: false
      t.string :date
      t.integer :topic_id

      t.timestamps
    end
  end
end
