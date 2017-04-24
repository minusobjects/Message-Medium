# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Story.destroy_all
Response.destroy_all

guest = User.create!(
  username: 'guest',
  password: 'password',
  name: 'Guest User',
  email: 'guest@guest.com',
  bio: 'Guest user on Message.',
  photo_url: 'ww.url.com'
)

mike = User.create!(
  username: 'mike',
  password: 'password',
  name: 'Mike Doe',
  email: 'm@mike.com',
  bio: 'I am totally Mike.',
  photo_url: 'www.url.com'
)

joe = User.create!(
  username: 'joe',
  password: 'password',
  name: 'Joe Josephson',
  email: 'j@joe.com',
  bio: 'I am definitely Joe.',
  photo_url: 'www.url.com'
)

bill = User.create!(
  username: 'bill',
  password: 'password',
  name: 'Bill Billperson',
  email: 'b@bill.com',
  bio: 'I am certainly Bill.',
  photo_url: 'www.url.com'
)

max = User.create!(
  username: 'max',
  password: 'password',
  name: 'Max Maximus',
  email: 'm@max.com',
  bio: 'Yes I am Max',
  photo: URI.parse("https://s3.us-east-2.amazonaws.com/message-dev/users/seed_photos/fluffy.jpg")
)

story1 = Story.create!(
  author_id: max.id,
  title: "I am an article!",
  description: "This is the description.",
  body: "This is the body",
  date: "4,18,2017,10,34,20",
  main_image: URI.parse("https://s3.us-east-2.amazonaws.com/message-dev/users/seed_photos/fluffy.jpg")
)

story2 = Story.create!(
  author_id: max.id,
  title: "Article two!",
  description: "Description of the second one.",
  body: "The body should probably be longer than the description. It would be weird if it weren't.",
  date: "4,18,2017,22,41,30",
  main_image: URI.parse("https://s3.us-east-2.amazonaws.com/message-dev/users/seed_photos/fluffy.jpg")
)

story3 = Story.create!(
  author_id: bill.id,
  title: "Third article!",
  description: "Formatting test!",
  body: "<p>This story will have <strong>formatting!</strong></p><p><br></p><h3><strong>Everyone loves formatting!!</strong></h3><p><br></p><p><em>Don\'t they???</em></p>",
  date: "4,18,2017,22,43,40",
  main_image: URI.parse("https://s3.us-east-2.amazonaws.com/message-dev/users/seed_photos/fluffy.jpg")
)

story4 = Story.create!(
  author_id: bill.id,
  title: "Fourth article!",
  description: "Default image, plus same formatting on text as #3.",
  body: "<p>This story will have <strong>formatting!</strong></p><p><br></p><h3><strong>Everyone loves formatting!!</strong></h3><p><br></p><p><em>Don\'t they???</em></p>",
  date: "4,22,2017,16,52,10"
)

response1 = Response.create!(
  writer_id: joe.id,
  story_id: story3.id,
  body: 'This is the response body. I am responding to something.',
  date: '4,22,2017,20,35,20'
)

response2 = Response.create!(
  writer_id: bill.id,
  story_id: story3.id,
  body: 'This is another response.',
  date: '4,22,2017,20,40,30'
)

response3 = Response.create!(
  writer_id: joe.id,
  story_id: story3.id,
  in_response_id: response2.id,
  body: 'This is a response to a response.',
  date: '4,22,2017,20,45,40'
)

response4 = Response.create!(
  writer_id: max.id,
  story_id: story3.id,
  body: 'This is a random response.',
  date: '4,22,2017,21,40,10'
)

response5 = Response.create!(
  writer_id: max.id,
  story_id: story3.id,
  in_response_id: response1.id,
  body: 'This is a response to the FIRST response.',
  date: '4,22,2017,21,45,20'
)

response6 = Response.create!(
  writer_id: max.id,
  story_id: story3.id,
  in_response_id: response1.id,
  body: 'This is ALSO a response to the FIRST response.',
  date: '4,22,2017,21,50,00'
)
