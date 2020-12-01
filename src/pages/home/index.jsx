import Banner from './components/Banner'
import OnlineCourses from './components/OnlineCourses.jsx'
import OfflineCourses from './components/OfflineCourses.jsx'
import Special from './components/Special.jsx'
import FeedBack from './components/FeedBack.jsx'
import Gallery from './components/Gallery.jsx'


export default function Home() {
    return (
        <>
            <div className="homepage">
                <Banner />
                <p className="intro">The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                <OnlineCourses />
                <OfflineCourses />
                <Special />
                <FeedBack />
                <Gallery />
            </div>
        </>
    )
}