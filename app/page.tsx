import CourseCard from '@/src/components/CourseCard'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Today&#39;s courses</h2>

      <div className="max-w-full flex flew-row flex-wrap px-24 gap-5">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  )
}
