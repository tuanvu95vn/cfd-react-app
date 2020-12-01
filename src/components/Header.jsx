export default function Header() {
    return (
        <header>
            <div className="menu">
                <div className="hamburger"><img src="img/Humbeger.svg" /></div>
                <span>menu</span>
            </div>
            <a href="#" className="brand">
                <h1 className="hide">CFD</h1>
                <div className="logo">
                    <img src="img/logo.svg" />
                </div>
            </a>
            <div className="right">
                <a href="login.html" className="login"><span>đăng nhập</span></a>
                <a href="signup.html" className="signup"><span>đăng ký</span></a>
            </div>
        </header>
    )
}