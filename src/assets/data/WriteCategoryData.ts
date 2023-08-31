export interface WriteCategory {
  name: string
  value: string
}

export interface detailCategory {
  name: string
  value: string
  parent: string
}

export interface WriteCategoryDataType  {
  noticeCategory: WriteCategory[]
  writeCategory: WriteCategory[]
  detailCategory: detailCategory[]
}

export const WriteCategoryData: WriteCategoryDataType = {
  noticeCategory: [
    {
      name: '선택해주세요',
      value: 'select',
    },
    {
      name: '삭제요청',
      value: 'DELETE',
    },
    {
      name: '질문사항',
      value: 'QUESTION',
    },
    {
      name: '신고',
      value: 'REPORT',
    },
  ],
  writeCategory: [
    {
      name: '선택해주세요',
      value: 'select',
    },
    {
      name: '학생',
      value: 'STUDENT',
    },
    {
      name: '선생님',
      value: 'TEACHER',
    },
    {
      name: '전공',
      value: 'MAJOR',
    },
    {
      name: '동아리',
      value: 'CLUB',
    },
    {
      name: '사건',
      value: 'INCIDENT',
    },
    {
      name: '학사일정',
      value: 'SCHEDULE',
    },
  ],
  detailCategory: [
    {
      name:'선택해주세요',
      value:'select',
      parent:'select',
    },
    {
      name: '7기',
      value: 'SEVENTH',
      parent: 'STUDENT',
    },
    {
      name: '6기',
      value: 'SIXTH',
      parent: 'STUDENT',
    },
    {
      name: '5기',
      value: 'FIFTH',
      parent: 'STUDENT',
    },
    {
      name: '일반교과',
      value: 'GENERAL',
      parent: 'TEACHER',
    },
    {
      name: '전문교과',
      value: 'SPECIALITY',
      parent: 'TEACHER',
    },
    {
      name: '기타 부서',
      value: 'OTHER',
      parent: 'TEACHER',
    },
    {
      name: '전공',
      value: 'MAJORS',
      parent: 'MAJOR',
    },
    {
      name: '전공동아리',
      value: 'MAJOR',
      parent: 'CLUB',
    },
    {
      name: '자율동아리',
      value: 'CA',
      parent: 'CLUB',
    },
    {
      name: '2022',
      value: 'TWENTY_SECOND',
      parent: 'INCIDENT',
    },
    {
      name: '2023',
      value: 'TWENTY_THIRD',
      parent: 'INCIDENT',
    },
    {
      name: '1',
      value: 'JAN',
      parent: 'SCHEDULE',
    },
    {
      name: '2',
      value: 'FEB',
      parent: 'SCHEDULE',
    },
    {
      name: '3',
      value: 'MAR',
      parent: 'SCHEDULE',
    },
    {
      name: '4',
      value: 'APR',
      parent: 'SCHEDULE',
    },
    {
      name: '5',
      value: 'MAY',
      parent: 'SCHEDULE',
    },
    {
      name: '6',
      value: 'JUN',
      parent: 'SCHEDULE',
    },
    {
      name: '7',
      value: 'JUL',
      parent: 'SCHEDULE',
    },
    {
      name: '8',
      value: 'AUG',
      parent: 'SCHEDULE',
    },
    {
      name: '9',
      value: 'SEPT',
      parent: 'SCHEDULE',
    },
    {
      name: '10',
      value: 'OCT',
      parent: 'SCHEDULE',
    },
    {
      name: '11',
      value: 'NOV',
      parent: 'SCHEDULE',
    },
    {
      name: '12',
      value: 'DEC',
      parent: 'SCHEDULE',
    },
  ],
}
