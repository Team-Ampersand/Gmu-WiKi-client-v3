import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks'
import * as S from './style'
import { RecentListType } from '@/types/components/RecentListType'
const dummy_data = [
  {
    id: 1,
    title: '글1',
    editedDate: '2023-08-137T12:07:22.732262',
  },
  {
    id: 2,
    title: '글2',
    editedDate: '2023-08-13T12:07:19.174468',
  },
  {
    id: 3,
    title: '글3',
    editedDate: '2023-08-13T12:07:23.92711',
  },
  {
    id: 4,
    title: '글4',
    editedDate: '2023-08-12T12:07:25.791465',
  },
  {
    id: 5,
    title: '글5',
    editedDate: '2023-08-12T12:07:27.514769',
  },
  {
    id: 6,
    title: '글6',
    editedDate: '2023-08-11T12:07:29.269685',
  },
  {
    id: 7,
    title: '글7',
    editedDate: '2023-08-10T12:07:31.207753',
  },
  {
    id: 8,
    title: '글8',
    editedDate: '2023-07-17T12:07:32.848759',
  },
  {
    id: 9,
    title: '글9',
    editedDate: '2023-07-17T12:07:34.544265',
  },
  {
    id: 10,
    title: '글10',
    editedDate: '2023-07-17T12:07:35.931436',
  },
  {
    id: 11,
    title: '글11',
    editedDate: '2023-07-17T12:07:38.886733',
  },
  {
    id: 12,
    title: '주미야바꾸고있어주미야바꾸고있어주미야',
    editedDate: '2023-07-17T12:07:40.501817',
  },
]

export default function RecentModified() {
  const [roleUrl, setRoleUrl] = useState('user')
  const [recentList, setRecentList] = useState<RecentListType[]>(dummy_data)

  function formatTime(timeString: string) {
    const date = new Date(timeString)
    const now = new Date()

    const elapsedMilliseconds: number = now.getTime() - date.getTime()
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000)
    const elapsedMinutes = Math.floor(elapsedSeconds / 60)
    const elapsedHours = Math.floor(elapsedMinutes / 60)
    const elapsedDays = Math.floor(elapsedHours / 24)
    const elapsedMonths = Math.floor(elapsedDays / 30)

    if (elapsedMonths > 0) {
      return `${elapsedMonths}개월 전`
    } else if (elapsedDays > 0) {
      return `${elapsedDays}일 전`
    } else if (elapsedHours > 0) {
      return `${elapsedHours}시간 전`
    } else if (elapsedMinutes > 0) {
      return `${elapsedMinutes}분 전`
    } else {
      return `방금 전`
    }
  }

  const handleBoardItemClick = (boardId: number) => {
    const boardUrl = `/board/${boardId}`
    window.location.href = boardUrl
  }

  return (
    <S.RecentModifiedContainer>
      <S.Title>최근 생성/수정된 글</S.Title>
      {recentList.map(({ id, title, editedDate }) => (
        <React.Fragment key={id}>
          <S.ModifiedItem onClick={() => handleBoardItemClick(id)}>
            <S.ModifiedItemTitle>
              {title}
            </S.ModifiedItemTitle>
            <S.ModifiedItemTime>{formatTime(editedDate)}</S.ModifiedItemTime>
          </S.ModifiedItem>
        </React.Fragment>
      ))}
    </S.RecentModifiedContainer>
  )
}
