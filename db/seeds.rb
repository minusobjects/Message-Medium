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

story5 = Story.create!(
  author_id: guest.id,
  title: "When the State gets it wrong, innocent people die — I was almost one of them",
  description: "The state of Arkansas is hell-bent to go on a killing spree.",
  body: '<p>Earlier this month, Governor Asa Hutchinson issued execution dates for eight men on death row, all to be carried out over the course of ten days. He didn’t care that there’s a chance at least two of them may be innocent, or that several others suffer mental disabilities that cross the line into the realm of handicaps. None of that meant anything to those trying with all their might to push these executions through. While several judges have stayed the executions for now, the mindset behind these rapid fire executions should scare all Americans. But perhaps one of the scariest parts, for me, is knowing I could have been the ninth man on the state’s death list.</p><p>Most people take a stance on the death penalty based on things they’ve read in the newspaper, saw on television, or by swallowing the hubris spewed by politicians eager to scare you into voting for them. Mine is not. My views on the death penalty are based on the fact that I spent over 18 years looking at the system from the inside, waiting for the state to murder me for a crime I did not commit. While awaiting execution at the hands of the state, I grew to know these men — the eight Hutchinson is rushing to kill — on a personal, face-to-face basis.</p><blockquote><em>They were my companions on a journey through hell.</em></blockquote><p>The state would have you believe that these men are irredeemably evil, that they are ravenous monsters bent on bloodshed, like creatures out of a horror movie. They are not. The men that local politicians are foaming at the mouth to kill showed me more kindness and simple humanity than anyone trying to execute them ever did. In fact, if not for one of them, Don Davis, I’d probably not have made it out of prison alive. He stood by my side and watched my back against sadistic prison guards who would have beaten me to death without a second thought.</p><p>Don is guilty. He’ll be the first to tell you that he’s guilty, and he makes no excuses for his actions 25 years ago. I once watched him break down crying because the guilt from what he’d done decades before was still eating him alive. No, despite the propaganda local officials are spreading to convince fear-stricken news watchers how “tough on crime” they are, it’s not monsters they’re trying to kill — they are insane, mentally handicapped, and remorseful men.</p><p>The state of Arkansas hasn’t carried out an execution in over a decade. So why the sudden, blood-crazed rush to carry out as many as possible? For one reason: the supply of drugs they use to carry out state-sanctioned murder are about to expire. You read that correctly. The rush of executions is so that the state can use up all of its lethal injection drugs before they go as sour as an old carton of milk.</p><p>Arkansas is currently embroiled in legal challenges, due to the fact that the company who makes one of these lethal drugs is suing for its return. They claim that Arkansas officials misled them about what the drugs were going to be used for, and they don’t want their product being used to kill people. Arkansas has so far refused to return the drug.</p><blockquote><em>Instead, on the night of April 20th, they want to use these ill-gotten chemicals to kill a man who may very well be innocent.</em></blockquote><p>One of the men scheduled to be executed is Ledell Lee. There is DNA evidence in his case, hair found at the crime scene, which the state has refused to test. A judge ruled that the DNA, which could exonerate him, should never be tested.</p><p>Keep in mind that in the history of the state of Arkansas, no one on death row has ever been exonerated. Local politicians maintain they have never made a mistake, that the system is infallible, and that they have never sentenced an innocent man to die. I know this is false, because for 18 years I sat on Arkansas’ death row and waited on the state to murder me for something I didn’t do. Even after DNA testing was completed in my case, which excluded me from the crime scene, I sat on death row for two more years as the state wrestled endlessly to cover it up and kill me. In the end, rather than take my chances in a legal system that was as rotten as a bad tooth, I took an Alford Plea. An Alford Plea is a paradox — it means you get to maintain your innocence, even as you accept a guilty plea. It makes no sense to anyone capable of logical thinking, and the only reason it exists is so the state can’t be held accountable for sentencing an innocent person to death. Part of this plea deal was that I could never sue the state of Arkansas for what they had done to me. Why would I take such a deal? Because I knew that if I didn’t, I’d eventually be right where Ledell Lee is now — looking into the face of death, despite having evidence that would have gained us exoneration in a less corrupt forum.</p><p>I might not be able to sue the state that took 18 years of my life, but I can share my experiences to counter the fear tactics Arkansas has used to justify their killing spree to the public. There are monsters in this story, that is certain — but as it turns out, some of them are our elected officials. If you don’t think a drug’s expiration date should be the deciding factor in whether someone deserves to die without a fair trial, you should contact Governor Hutchinson <a href="http://governor.arkansas.gov/contact-info/" target="_blank">here</a>.</p><p><strong>Update (4/21/17):</strong> Last night, Ledell Lee was executed by the state of Arkansas. Nina Morrison, a lawyer for Mr. Lee who spent the evening arguing for a stay, released a statement condemning the decision. “Arkansas’s decision to rush through the execution of Mr. Lee just because its supply of lethal drugs are expiring at the end of the month denied him the opportunity to conduct DNA testing that could have proven his innocence.”</p>',
  date: "4,23,2017,17,14",
  main_image: URI.parse("https://s3.us-east-2.amazonaws.com/message-dev/users/seed_photos/nichols.jpeg")
)

story6 = Story.create!(
  author_id: guest.id,
  title: "Yes, chatbots have feelings too.",
  description: 'A team from Tsinghua University in Beijing just gave machines the ability to convey specific emotions.',
  body: '<p>From voice-enabled chatbots like Alexa and Google Home to native bots living on Facebook Messenger or Slack, we’ve become accustomed to holding a basic conversation with chatbots. But one of the most cited shortcomings of these chatbots is their inability to understand and convey emotion. Lacking emotional intelligence, current chatbots cannot respond appropriately to a happy or angry user.</p><p>This week, thanks to the work of Hao Zhou and his team at Tsinghua University, chatbots are getting a serious upgrade to detect emotional content and respond based on the emotional valence of the conversation. For example, the paper provides various responses to a post concerning Valentine’s Day:</p><p><strong> Like:</strong> Happy Valentine’s Day!</p><p><strong> Happiness:</strong> Aha, this is too romantic!</p><p><strong> Sadness:</strong> I also want this kind of Valentine’s day.</p><p><strong> Disgust:</strong> This is the so-called Valentine’s day.</p><p><strong> Anger:</strong> This is a shameless show-off!</p><p>While the machine cannot yet process surprise and fear, Zhou’s Emotional Chatting Machine can model high-level emotion, capture changing internal emotion state, and respond with language embedded with emotional valence.</p><h2>How Does This Work?</h2><p>Scientists generally categorize emotion into six categories: happiness, sadness, disgust, anger, surprise, and fear. Psychologists and social scientists have long documented a list of emotional valence of words. In fact, there’s even <a href="https://arxiv.org/abs/1704.05579" target="_blank">a corpus for over 1.3 million sarcastic comments</a>.</p><p>Zhou’s team decided to apply some of this data to emotionally charge chatbots. First, sentiment analysis extracts the high-level emotional content of the conversation. Next, the chatbot generates responses that are contextually and emotionally appropriate. Zhou’s team annotated more than 23,000 sentences from Chinese microblogging site Weibo and trained the chatbot to classify sentences based on the perceived emotional valence. Lastly, the chatbot generates responses using a popular Seq2Seq model similar to how other deep-learning based chatbots behave.</p><h3>Implications — More Chatbots?</h3><p>Aside from the cool factor, this development could accelerate the growth of the chabot industry. For now, chatbots are primarily used to retrieve information (e.g. ask for weather, traffic data) or give simple directives (e.g. order items, create calendar event). An emotionally aware chatbot could significantly change the service industry.</p><p>While most websites currently have offline chatbots you can talk to, imagine an empathetic bot that can help you solve your issues with the product instead of waiting for a potentially grumpy sales agent. If this technology matures even more, customer service industry may also feel the effects of automation.</p>',
  date: "4,23,2017,17,45",
  main_image: URI.parse("https://s3.us-east-2.amazonaws.com/message-dev/users/seed_photos/chatbots.jpeg")
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
