export default function Gallery() {
    return (
        <>
            <section className="gallery pd">
                <h2 className="gallery__title title-main">
                    <span className="small">chúng ta</span>
                    <span>là một team</span>
                </h2>
                <div className="gallery__wrap">
                    <div className="gallery__item">
                        <img src="img/carousel-1.jpg" alt />
                    </div>
                    <div className="gallery__item">
                        <img src="img/carousel-2.jpg" alt />
                    </div>
                    <div className="gallery__item">
                        <img src="img/carousel-3.jpg" alt />
                    </div>
                    <div className="gallery__item">
                        <img src="img/carousel-4.jpg" alt />
                    </div>
                </div>
            </section>
        </>
    )
}