import HeroSection from "../components/HeroSection"
import PhotoGallery from "../components/PhotoGallery"
import ReviewSection from "../components/ReviewSection"

const Home = () => {
  return (
    <div className="mt-36">  
        <HeroSection />
        <PhotoGallery />
        <ReviewSection/>
    </div>
  )
}   

export default Home
