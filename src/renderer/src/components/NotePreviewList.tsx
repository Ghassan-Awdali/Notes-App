import React, { ComponentProps } from 'react'
import {notesMock} from '@/store/mocks'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({...props}:ComponentProps<'ul'>) => {
  return (
    <ul{...props}>{notesMock.map(note =>(
        <NotePreview key = {note.title + note.lastEditTime}{...note}></NotePreview>
    ))}</ul>
  )
}

export default NotePreviewList