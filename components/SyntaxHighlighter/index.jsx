import {useEffect} from 'react'
import Prism from 'prismjs'

export default function SyntaxHighlighter({ data }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [data])
  return null
}
