export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  body: any
}
