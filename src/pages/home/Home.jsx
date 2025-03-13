import Searchbar from '../../components/searchbar/Searchbar'
import './home.scss'

function Home(){
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Welcome to YourEstate & Get Your Dream Place</h1>
                <p className='desc'>Discover your dream home with our seamless real estate app—effortless searching, personalized listings, and expert support at your fingertips. Make your property journey smooth and satisfying.</p>
                <Searchbar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200+</h1>
                        <h2>Award Winning</h2>
                    </div>
                    <div className="box">
                        <h1>20000+</h1>
                        <h2>Happy Customers</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default Home