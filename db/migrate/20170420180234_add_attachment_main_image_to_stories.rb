class AddAttachmentMainImageToStories < ActiveRecord::Migration
  def self.up
    change_table :stories do |t|
      t.attachment :main_image
    end
  end

  def self.down
    remove_attachment :stories, :main_image
  end
end
