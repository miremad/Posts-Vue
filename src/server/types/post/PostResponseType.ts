import type { UserResponseType } from '@/server/types/user/UserResponseType'

export type PostResponseType = {
  id?: number
  title: string
  image?: string
  likes: string
  tags: string[]
  publishDate: string
  text: string
  userId?: string
  user: UserResponseType
}
