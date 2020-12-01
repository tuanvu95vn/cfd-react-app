export default function Course({title, description, cover}) {
    return (
        <>
            <div className="online__list-item">
                <div className="img"><img src={cover} alt="image course" /></div>
                <div className="text">
                    <h3 className="title">{title}</h3>
                    <p className="des">{description}</p>
                </div>
                <div className="btn">
                    <div className="trainer">
                        <div className="img-trainer">
                            <img src="img/avt.jpg" alt />
                        </div>
                        <span className="name">Trần Nghĩa</span>
                    </div>
                    <a href="register-course.html" className="btn-register"><span>Đăng ký</span></a>
                </div>
            </div>
        </>
    )
}