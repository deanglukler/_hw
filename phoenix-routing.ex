## phoenix Routing
## web/rounting.ex



## routes information
mix phoenix.routes

page_path  GET   /            Discuss.PageController :index
topic_path  GET   /topics/new  Discuss.TopicController :new
topic_path  POST  /topics      Discuss.TopicController :create

# the first column is the general name of the path
# it also provides a reference to the route using topic_path(@conn, :create)
# if client makes requesst to topics/new, the TopicController new function will be executed







## ex
scope "/", Discuss do
  pipe_through :browser # Use the default browser stack
  get "/", PageController, :index


  # when request for topics/new
  # run Topic Controller
  # specifically the new() function
  get "/topics/new", TopicController, :new
end
