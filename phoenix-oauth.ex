## use ueberauth
## note if once oAuth is complete once it will not be required again..
## you can revoke authentication and redo the auth flow, in your settings here..
## https://github.com/settings/applications

## get dependencies
def application do
  [mod: {Discuss, []},
   applications: [:ueberauth, :ueberauth_github]]
end

defp deps do
   [
    {:ueberauth, "~> 0.4"},
    {:ueberauth_github, "~> 0.7"}
   ]
 end




## register app on github.com
# github.com
# settings
# developer settings
# OAuth applications

# most settings can be kinda fake
# Authorization callback URL
# http://localhost:4000/auth/github/callback




# inside config/config.exs
config :ueberauth, Ueberauth,
  providers: [
    github: { Ueberauth.Strategy.Github, []}
  ]

config :ueberauth, Ueberauth.Strategy.Github.OAuth,
  client_id: "0cd0a65ebf59aa3181d7",
  client_secret: "9953e22176c6a2fd9c842c9c6be50840ded27bed"




# set up routes
# setup a new namespace for auth routes
scope "/auth", Discuss do
  pipe_through :browser

  # could use "/github" but if we add other oauth in the future..
  # :provider will intelligently choose
  get ":provider", AuthController, :request # handled by ueberauth
  get "/:provider/callback", AuthController, :callback # handled by us..
end



















