import Course from './../../../components/Course'
export default function OnlineCourse(title, description, cover) {
    return (
        <>
            <section className="online">
                <div className="container">
                    <h2 className="online__title title-main">
                        <span className="small">khóa học</span>
                        <span>online</span>
                    </h2>
                    <div className="online__list">
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-online-1.jpg'/>
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-online-1.jpg'/>
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-online-1.jpg'/>
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-online-1.jpg'/>
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-online-1.jpg'/>
                       <Course
                            title = 'acb' 
                            description= 'acb'
                            cover = 'img/course-online-1.jpg'/>
                    </div>
                </div>
            </section>

        </>
    )
}