# Message

[Message live][heroku]

[heroku]: http://message-medium.herokuapp.com/

Message is a full-stack single-page web application inspired by the blog/news site Medium. It utilizes Ruby on Rails (backend), PostgreSQL (database), and React.js/Redux (frontend).

## Features & Implementation 

### Writing and editing stories and responses

Users may write their own stories via a spare, clean interface - the almost-entirely white page is meant to emulate the feeling of a blank sheet of paper. The more-complex functionality only becomes evident after some interaction: image uploading and linked topics via database associations, and rich text editing using tools adapted from the QuillJS library. In order to achieve the desired experience, I had to heavily edit the Quill interface. The database stores stories in specially-formatted HTML, which can then be rendered via React.

User may leave responses on stories or on other responses. The chain of responses (sorted by time and by comment thread) is managed through JavaScript algorithms; using the Redux architecture, users may seamlessly leave responses or edit their own responses.

Below is an initial wireframe drawing of the individual story page (note that the sidebar component is used to display that story's likes):

### Follows

Users may 'follow' other users by clicking on a modular React component. In addition to the user's information, each user profile page contains three feeds: stories and responses written by that user, stories and responses which have been liked by that user, and stories and responses by users followed by that user. This information is quickly retrieved from the server thanks to a series of associations between multiple database tables (`users`, `stories`, `responses`, `likes`, `follows`, and `followings`). Users my view these feeds by clicking on a custom SVG icon menu.

Below is an initial wireframe drawing of the user profile page:

![image of user_profile](wireframes/user-profile.png)

### Tags

Through the Rails backend, stories are associated with topics and can be 'liked' by users. Database associations allow for a record of all stories and responses that any user has written or has simply liked (or both).

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](wireframes/tag-search.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
