import { Lesson } from '@/src/types/types'
import Link from 'next/link'

interface CourseCardProps {
  lesson: Lesson
}

const CourseCard = ({ lesson }: CourseCardProps) => {
  return (
    <Link href={`/lesson/${lesson.id}`}>
      <div className="w-72 rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="h-40 bg-gray-200">
          <img
            className="w-full h-full object-cover rounded-t-2xl"
            src="https://picsum.photos/500/200"
            alt="Course image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{lesson.subject.name}</h3>
          <p className="text-gray-600 mb-1">Teacher: {lesson.teacher.name}</p>
          <p className="text-gray-600 mb-1">Day: {lesson.day}</p>
          <p className="text-gray-600 mb-4">
            Start Time: {lesson.startTime} - End Time: {lesson.endTime}
          </p>
          <p className="text-gray-600 mb-4">
            Registration Time: {lesson.registrationStartTime}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
