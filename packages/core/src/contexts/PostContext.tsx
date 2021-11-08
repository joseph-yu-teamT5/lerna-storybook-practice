import React, { FC } from 'react'

const PostContext = React.createContext<{
  imageModalOpen: boolean
  setImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  imageModalSource: string
  setImageModalSource: React.Dispatch<React.SetStateAction<string>>
}>({
  imageModalOpen: false,
  setImageModalOpen: () => null,
  imageModalSource: '',
  setImageModalSource: () => null,
})

const PostProvider: FC = ({ children }) => {
  const [imageModalOpen, setImageModalOpen] = React.useState(false)
  const [imageModalSource, setImageModalSource] = React.useState('')

  return (
    <PostContext.Provider
      value={{
        imageModalOpen,
        setImageModalOpen,
        imageModalSource,
        setImageModalSource,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

const PostConsumer = PostContext.Consumer

export { PostContext, PostProvider, PostConsumer }
