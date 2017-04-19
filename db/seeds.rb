# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(
  username: 'mike',
  password: 'password',
  name: 'Mike Doe',
  email: 'm@mike.com',
  bio: 'I am totally Mike.',
  photo_url: 'www.url.com'
)

User.create!(
  username: 'joe',
  password: 'password',
  name: 'Joe Josephson',
  email: 'j@joe.com',
  bio: 'I am definitely Joe.',
  photo_url: 'www.url.com'
)

User.create!(
  username: 'bill',
  password: 'password',
  name: 'Bill Billperson',
  email: 'b@bill.com',
  bio: 'I am certainly Bill.',
  photo_url: 'www.url.com'
)
