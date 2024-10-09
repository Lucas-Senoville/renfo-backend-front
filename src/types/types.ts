// types.ts

export interface Grade {
  id: number
  name: string
  year: number
}

export interface Student {
  id: number
  firstname: string
  lastname: string
}

export interface Subject {
  id: number
  name: string
}

export interface Teacher {
  id: number
  firstname: string
  lastname: string
}

export interface Document {
  id: number
  name: string
  url: string
  size?: number
  type?: string
}

export interface Lesson {
  id: number
  day: string
  startTime: string
  endTime: string
  registrationStartTime: string
  subjectId: number
  gradeId: number
  teacherId: number
}

export interface Registration {
  id: number
  date: string
  lessonId: number
  studentId: number
}
