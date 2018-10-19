## web/models/...

# ex
# models/topic.ex
defmodule Discus.Topic do
  use Discuss.Web, :model


  # Schema
  # describes how the model interacts with database
  # the table name is topics
  # there exists a column "title" which takes a "string"
  schema "topics" do
    field :title, :string
  end

  # tut: https://www.udemy.com/the-complete-elixir-and-phoenix-bootcamp-and-tutorial/learn/v4/t/lecture/5941682?start=479
  # struct represents a record in our db
  # params describes the new propertiess we want to update the struct with
  # cast produces a changeset bases on struct and params
  # change set is how we get from where we are to where we need to be
  # change set also includes info on whether the change is valid (using validators)
  #
  def changeset(struct, params \\ %{}) do
   struct
   |> cast(params, [:title])
   |> validate_required([:title])
  end
end