export default function Special() {
    return (
        <>
            <section className="feedback pd">
                <div className="container">
                    <h2 className="feedback__title title-main">
                        <span className="small">cảm nhận</span>
                        <span>thành viên</span>
                    </h2>
                    <div className=" feedback__content row align-items-center">
                        <div className="col-md-1">
                            <div className="feedback__content-btn -prev">
                                <img src="img/prev-arrow-icon.svg" alt />
                            </div>
                        </div>
                        <div className="col-md-7 feedback__content-textbox">
                            <i className="quotes"><img src="img/double-quotes 1.svg" alt /></i>
                            <p className="name">Tiến Tài</p>
                            <p className="position">Thành viên CFD1</p>
                            <p className="content">Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua khóa học. Like cho 4 mentor.</p>
                            <div className="bottom">
                                <a href="https://www.facebook.com/" className="icon-fb"><img src="img/fb-icon.svg" alt /></a>
                                <span className="date">08/09/2020</span>
                            </div>
                        </div>
                        <div className="col-md-3 feedback__content-avatar">
                            <img src="img/member.jpg" alt />
                        </div>
                        <div className="col-md-1">
                            <div className="feedback__content-btn -next">
                                <img src="img/prev-arrow-icon.svg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="dots">
                        <ul>
                            <li className="active" />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}