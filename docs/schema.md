# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
name            | string    | not null
bio             | text      |
photo_url       | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## stories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
topic_id        | integer   | (bonus feature) not null, foreign key (references topics), indexed
title           | string    | not null
description     | text      |
body            | text      | not null
date            | string    | (allowing null for now - to make use of timestamps)
image           | string    | (generated via paperclip; can be default)

## responses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
story_id        | integer   | foreign key (references stories), indexed
writer_id       | integer   | not null, foreign key (references users), indexed
body            | text      | not null
date            | string    | not null
in_response_id  | integer   | (if possible, foreign key for responses to responses)

## topics
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique

## followed_topics
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
topic_id        | integer   | not null, foreign key (references topics), indexed

## tags
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique

## taggings
column name     | data type | details
----------------|-----------|-----------------------
tag_id          | integer   | not null, foreign key (references tags), indexed
story_id        | integer   | not null, foreign key (references stories), indexed

## related_tags
column name     | data type | details
----------------|-----------|-----------------------
tag_id          | integer   | not null, foreign key (references tags), indexed
related_tag_id  | integer   | not null, foreign key (references tags), indexed

## followed_tags
column name     | data type | details
----------------|-----------|-----------------------
tag_id          | integer   | not null, foreign key (references tags), indexed
user_id         | integer   | not null, foreign key (references users), indexed

## followings
column name     | data type | details
----------------|-----------|-----------------------
follower_id     | integer   | not null, foreign key (references users), indexed
following_id    | integer   | not null, foreign key (references users), indexed

## highlights
column name     | data type | details
----------------|-----------|-----------------------
story_id        | integer   | not null, foreign key (references stories), indexed
user_id         | integer   | not null, foreign key (references users), indexed
data            | string    | not null

## likes
column name     | data type | details
----------------|-----------|-----------------------
user_id         | integer   | not null, foreign key (references users), indexed
story_id        | integer   | not null, foreign key (references stories), indexed
response_id     | integer   | foreign key (references responses), indexed
