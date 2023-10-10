import { RichTextContent } from '@graphcms/rich-text-types'

export type Posts = {
  id: string
  slug: string
  title: string
  subtitle: string
  datePost: string
  postImg: {
    url: string
  }
  author: {
    name: string
    photo: {
      url: string
    }
  }
  content: {
    raw: RichTextContent
    json: RichTextContent
    html: RichTextContent
    markdown: RichTextContent
  }
}
