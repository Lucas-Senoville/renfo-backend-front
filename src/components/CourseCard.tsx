import { Lesson } from '@/src/types/types'
import Link from 'next/link'

interface CourseCardProps {
  lesson: Lesson
}

const CourseCard = ({ lesson }: CourseCardProps) => {
  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="h-40 bg-gray-200">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/500/200"
          alt="Course image"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{lesson.subject.name}</h3>
        <p className="text-gray-600 mb-1">
          Teacher: {lesson.teacher.firstname} {lesson.teacher.lastname}
        </p>
        <p className="text-gray-600 mb-1">Day: {lesson.day}</p>
        <p className="text-gray-600 mb-4">
          Start Time: {lesson.startTime} - End Time: {lesson.endTime}
        </p>
        <p className="text-gray-600 mb-4">
          Registration Time: {lesson.registrationStartTime}
        </p>
        <Link
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          href={`/lesson/${lesson.id}`}
        >
          Manage the Lesson
        </Link>
      </div>
    </div>
  )
}

export default CourseCard
