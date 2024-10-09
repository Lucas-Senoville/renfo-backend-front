import { Lesson, Subject, Grade, Teacher, Student } from '../types/types'

const randomTime = () => {
  const hours = Math.floor(Math.random() * 12) + 8 // 8 AM to 7 PM
  const minutes = Math.random() < 0.5 ? '00' : '30'
  return `${hours.toString().padStart(2, '0')}:${minutes}`
}

const subjects: Subject[] = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: ['Mathematics', 'Physics', 'Literature', 'History', 'Biology'][i],
}))

const grades: Grade[] = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: `${i + 10}th Grade`,
  year: 2024,
  students: [],
  teachers: [],
}))

const teachers: Teacher[] = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `Teacher ${i + 1}`,
  grades: [grades[Math.floor(Math.random() * grades.length)]],
}))

const students: Student[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  firstname: `Student${i + 1}`,
  lastname: `LastName${i + 1}`,
  grade: grades[Math.floor(Math.random() * grades.length)],
}))

grades.forEach(grade => {
  grade.students = students.filter(student => student.grade.id === grade.id)
  grade.teachers = teachers.filter(teacher =>
    teacher.grades.some(g => g.id === grade.id)
  )
})

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const mockLessons: Lesson[] = Array.from({ length: 20 }, (_, i) => {
  const startTime = randomTime()
  const [startHour, startMinute] = startTime.split(':').map(Number)
  const endHour = (startHour + 1) % 24
  const endTime = `${endHour.toString().padStart(2, '0')}:${startMinute}`

  const registrationStartHour = startHour > 0 ? startHour - 1 : 23
  const registrationStartTime = `${registrationStartHour.toString().padStart(2, '0')}:${startMinute}`

  const lesson: Lesson = {
    id: i + 1,
    day: days[Math.floor(Math.random() * days.length)],
    startTime,
    endTime,
    registrationStartTime,
    subject: subjects[Math.floor(Math.random() * subjects.length)],
    grade: grades[Math.floor(Math.random() * grades.length)],
    teacher: teachers[Math.floor(Math.random() * teachers.length)],
    registrations: [],
  }

  const registrationCount = Math.floor(Math.random() * 4)
  lesson.registrations = Array.from({ length: registrationCount }, (_, j) => ({
    id: i * 3 + j + 1,
    date: new Date().toISOString().split('T')[0], // Current date
    lesson: lesson,
    students: Array.from(
      { length: Math.floor(Math.random() * 5) + 1 },
      () => students[Math.floor(Math.random() * students.length)]
    ),
  }))

  return lesson
})

export { mockLessons, subjects, grades, teachers, students }
