class CreateFollowings < ActiveRecord::Migration[5.0]
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.integer :following_id, null: false
      
      t.timestamps
    end
  end
end
