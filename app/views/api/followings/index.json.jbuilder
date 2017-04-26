@followings.each do |following|
  json.set! following.id do
    json.partial! 'following', following: following
  end
end
