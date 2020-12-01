import Course from './../../../components/Course'
export default function OfflineCourse(title, description, cover) {
    return (
        <>
            <section className="offline">
                <div className="container">
                    <h2 className="offline__title title-main">
                        <span className="small">khóa học</span>
                        <span>offline</span>
                    </h2>
                    <div className="offline__list">
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-offline-1.jpg'/>
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-offline-1.jpg'/>
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-offline-1.jpg'/>
                    </div>
                </div>
            </section>

        </>
    )
}