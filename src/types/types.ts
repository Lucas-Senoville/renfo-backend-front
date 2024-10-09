export interface Grade {
  id: number
  name: string
  year: number
  students: Student[]
  teachers: Teacher[]
}

export interface Student {
  id: number
  firstname: string
  lastname: string
  grade: Grade
}

export interface Subject {
  id: number
  name: string
  documents?: Document[]
}

export interface Teacher {
  id: number
  name: string
  grades: Grade[]
}

export interface Document {
  id: number
  firstname: string
  lastname: string
  url: string
  size?: string
  type?: string
}

export interface Lesson {
  id: number
  day: string
  startTime: string
  endTime: string
  registrationStartTime: string
  subject: Subject
  grade: Grade
  teacher: Teacher
  registrations: Registration[]
}

export interface Registration {
  id: number
  date: string
  lesson: Lesson
  students: Student[]
}
