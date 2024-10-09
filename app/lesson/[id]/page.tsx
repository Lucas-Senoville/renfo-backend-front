import { useRouter } from 'next/router'

export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Lesson {params.id}</h1>
    </div>
  )
}
