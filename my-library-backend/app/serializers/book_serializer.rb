class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :read
  belongs_to :library
end
