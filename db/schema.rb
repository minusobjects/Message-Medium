# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170425133900) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "followings", force: :cascade do |t|
    t.integer  "follower_id",  null: false
    t.integer  "following_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "liker_id",    null: false
    t.integer  "story_id",    null: false
    t.integer  "response_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "responses", force: :cascade do |t|
    t.integer  "writer_id",      null: false
    t.integer  "story_id"
    t.text     "body",           null: false
    t.string   "date"
    t.integer  "in_response_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "stories", force: :cascade do |t|
    t.integer  "author_id",               null: false
    t.string   "title",                   null: false
    t.text     "description"
    t.text     "body",                    null: false
    t.string   "date"
    t.integer  "topic_id"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "main_image_file_name"
    t.string   "main_image_content_type"
    t.integer  "main_image_file_size"
    t.datetime "main_image_updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "email",              null: false
    t.string   "name",               null: false
    t.text     "bio"
    t.string   "photo_url"
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
