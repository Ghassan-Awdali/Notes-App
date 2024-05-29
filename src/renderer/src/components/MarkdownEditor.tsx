import { MDXEditor } from '@mdxeditor/editor'
import React from 'react'

const MarkdownEditor = () => {
  return (
    <MDXEditor markdown={'# Hello from Mdx Editor'} contentEditableClassName='outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500'></MDXEditor>
  )
}

export default MarkdownEditor