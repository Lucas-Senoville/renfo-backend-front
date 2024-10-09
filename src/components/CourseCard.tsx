const CourseCard = () => {
  return (
    <div className="w-1/4 border border-blue-100 flex-wrap">
      <div className="w-full object-cover">
        <img src="https://picsum.photos/500/200" alt="Course image" />
      </div>
      <div>
        <h3 className="font-bold">Cours de maths</h3>
        <p>14h-19h</p>
        <p>Heure d'appel : 14h</p>
      </div>
    </div>
  )
}

export default CourseCard
