export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 left">
                        <p className="slogan">
                            Sáng tạo, tinh tế và phù hợp sẽ khiến
                            sản phẩm của bạn trở nên khác biệt.</p>
                        <p className="address"></p>
                        <p className="tel">(+84) 98 9596 913</p>
                        <div className="social">
                            <i><img src="img/fb-icon.svg" /></i>
                            <i><img src="img/mail-icon.svg" /></i>
                            <i><img src="img/skype-icon.svg" /></i>
                        </div>
                    </div>
                    <div className="col-md-5 right">
                        <ul className="menu">
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="course.html">Khóa học </a></li>
                            <li><a href="payment.html">Thanh toán</a></li>
                            <li><a href="terms.html">Điều khoản</a></li>
                        </ul>
                        <div className="backtotop">
                            <span>cuộn lên</span>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p>2020 Creative Front-End Dev</p>
                    <p>Được thiết kế và lập trình bởi CFD Team</p>
                </div>
            </div>
        </footer>
    )
}