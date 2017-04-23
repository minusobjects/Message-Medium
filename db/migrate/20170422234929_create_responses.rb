class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.integer :writer_id, null: false
      t.integer :story_id
      t.text :body, null: false
      t.string :date
      t.integer :in_response_id

      t.timestamps
    end
  end
end
