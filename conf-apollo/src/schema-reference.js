/*-- Exported from Graphcool for reference within code

# projectId: cj4rqxc8hegfl0185a809fdku
# version: 4

type User implements Node {
  id: ID! @isUnique
  createdAt: DateTime!
  updatedAt: DateTime!
}

type File implements Node {
  id: ID! @isUnique
  createdAt: DateTime!
  updatedAt: DateTime!
  contentType: String!
  name: String!
  secret: String! @isUnique
  size: Int!
  url: String! @isUnique
}

type Conference implements Node {
  id: ID! @isUnique
  name: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  start: DateTime!
  end: DateTime!
  url: String
  location: Location @relation(name: "ConferenceAtLocation")
  tags: [Tag!]! @relation(name: "TagsForConferences")
}

type Location implements Node {
  id: ID! @isUnique
  address: String
  city: String!
  state: String!
  postalCode: String
  country: String
  name: String
  url: String
  createdAt: DateTime!
  updatedAt: DateTime!
  conferences: [Conference!]! @relation(name: "ConferenceAtLocation")
}

type Tag implements Node {
  id: ID! @isUnique
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
  conferences: [Conference!]! @relation(name: "TagsForConferences")
}

--*/