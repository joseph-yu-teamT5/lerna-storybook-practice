const isBrowser = typeof window !== 'undefined'

const toDateString = (date: Date): string => {
  const yyyy = date.getFullYear()
  let mm: string | number = date.getMonth() + 1
  mm = mm < 10 ? `0${mm}` : mm
  let dd: string | number = date.getDate()
  dd = dd < 10 ? `0${dd}` : dd
  return `${yyyy}. ${mm}. ${dd}`
}

const getPostContent = (blog: any, locale = 'en') => {
  if (!blog.contents || blog.contents.length === 0) {
    return null
  }

  let content = null

  content = blog.contents.filter((content: any) => {
    return content.locale === locale
  })[0]

  if (!content) {
    content = blog.contents.filter((content: any) => {
      return content.locale === 'en'
    })[0]
  }

  if (!content) {
    content = blog.contents[0]
  }

  return content
}

const getTopicContent = (topic: any, locale = 'en') => {
  if (!topic.contents || topic.contents.length === 0) {
    return null
  }

  let content = null

  content = topic.contents.filter((content: any) => {
    return content.locale === locale
  })[0]

  if (!content) {
    content = topic.contents.filter((content: any) => {
      return content.locale === 'en'
    })[0]
  }

  if (!content) {
    content = topic.contents[0]
  }

  return content
}

const getTotalPage = (count: number, max: number): number => {
  return Math.ceil(count / max)
}

const getPostBannerImageUrl = (str: string): string => {
  if (!str) {
    return ''
  }

  const urlsSplit = str.split('/')
  urlsSplit.splice(urlsSplit.indexOf('upload') + 1, 0, 'f_auto')

  return urlsSplit.join('/')
}

export {
  isBrowser,
  toDateString,
  getPostContent,
  getTopicContent,
  getTotalPage,
  getPostBannerImageUrl,
}
