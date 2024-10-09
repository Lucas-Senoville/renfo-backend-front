'use client'
import { useEffect } from 'react'
import CourseCard from '@/src/components/CourseCard'
import { mockLessons } from '@/src/mock/mock'

export default function Home() {
  useEffect(() => {
    console.log(mockLessons)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-semibold mb-8">Today's Courses</h2>

      <div className="max-w-6xl flex flex-row flex-wrap gap-8 justify-center">
        {mockLessons.map(lesson => (
          <CourseCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  )
}
