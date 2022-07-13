# Full-Stack-MERN-Memories-App

display:www.hunter-memories.com
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
Backend set up

npm is the world's largest Software Registry. The registry contains over 800,000 code packages.

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser

nodemon is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected.

Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to: write handlers for requests with different HTTP verbs (GET, POST, SET) at different URL paths (routes).

body-parser parses your request and converts it into a format from which you can easily extract relevant information that you may need. E.g. (req.body)

CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. 

Mongoose is a Node.js-based Object Data Modelling (ODM) library for MongoDB. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package. npm init to initialise package.json 

package.json

For this project index.js is the starting point of the server application
"start": "nodemon index.js",

Import "type" field with a value of "module". This will ensure that all .js and .mjs files are interpreted as ES modules. ‘
"type": "module"

bodyParser.json() - middleware for parsing json objects.
bodyParser.urlencoded({ extended: true }) - middleware for parsing bodies from URL. 

MongoDB Atlas: https://www.mongodb.com/cloud/atlas

Route methods
![image](https://user-images.githubusercontent.com/75303443/178651593-24e16e6e-3686-476f-8f7a-a5fcb68738ad.png)


———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
Redux set up

Redux 是一个使用叫做“action”的事件来管理和更新应用状态的模式和工具库 它以集中式Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。
This is the basic idea behind Redux: a single centralised place to contain the global state in your application, and specific patterns to follow when updating that state. You can use redux to store the state and you can use it to any component without worrying about the hierarchy.
 
npm install react-redux
Initialise redux at index.js
Set up for redux

1. provider is going to keep tract of that store, which is that global state that allow us to access that store from anywhere inside of the app
2. createStore: create a Redux store to store all state in this app
3. middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's dispatch method for fun and profit. 
4. compose: This is a functional programming utility, and is included in Redux as a convenience.
5. thunk is a programming term that means "a piece of code that does some delayed work”.


<img width="659" alt="image" src="https://user-images.githubusercontent.com/75303443/178651738-e0a95890-b65a-49de-892e-069a59ea6f1b.png">

<img width="612" alt="image" src="https://user-images.githubusercontent.com/75303443/178651784-4ffa472a-2338-4106-a538-692428d6bddf.png">
<img width="533" alt="image" src="https://user-images.githubusercontent.com/75303443/178651819-612ed48b-190e-4b52-9606-e4c0a2837131.png">


<img width="659" alt="image" src="https://user-images.githubusercontent.com/75303443/178651738-e0a95890-b65a-49de-892e-069a59ea6f1b.png">
