@stories.each do |story|
  json.set! story.id do
    json.partial! 'story', story: story
  end
end
