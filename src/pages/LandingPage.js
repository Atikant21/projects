import React from "react";
import "../CSS/LandingPage.css";

const LandingPage = () => {
    return (
        <div>
            <div className="Header">

                <img
                    src="https://pipschools.com/wp-content/uploads/2024/11/logo-small.png"
                    alt="pip"/>
                <button>Explore Centres</button>

            </div>
            <section className="Box">
                <h1>Ghaziabad's most Loved Pre-School & Day Care</h1>
                <p>Where your child learns, plays, and grows in a nurturing environment designed
                    for excellence.

                </p>
                <button>
                    Adimission Open:Apply Now
                </button>
            </section>
            <section className="Trust">
                <h1>Why Parents Trust Us</h1>
            </section>
            <section className="Flex-box">
                <div className="parent-box">
                    <h3>Exceptional Facilities</h3>
                    <p>Exclusive Swimming Pool, Modern Classrooms, Expansive Play Areas.</p>

                </div>
                <div className="parent-box">

                    <h3>A Curriculum Built for Excellence
                    </h3>
                    <p>STEM-based learning, life skills, and extracurriculars.</p>
                </div>

            </section>
            <section className="Box2">
                <h1>What Parents Are Saying</h1>
                <section className="Box2a">
                    <p>Saying 🗨 “I’ve never seen my child this excited to go to school! The
                        teachers, the facilities, and the activities are simply amazing!”
                        </p>
                      <span>⭐⭐⭐⭐⭐ Google Review</span><br/>
                    
                    <button>Watch Real Parent Testimonial Videos</button>
                    <button>See Our Glowing Google Review</button>
                </section>
                <section className="foot">Don’t Wait – Limited Seats Available! Your child’s bright future starts here.</section>
            </section>
            <section className="mail">
                <h1>Newsletter
                </h1>
                <p>Sign up to our newsletter and stay updated!</p>
                <div class="search-container">
    <input type="text" placeholder="Search..." class="search-bar">
    </input>
  </div>
                
            </section>
            <section className="follow">
                <h1>Follow Us</h1>

            </section>
            <footer>
                <h1>Contact Us</h1>
                <p>📍 Rajnagar Extension, Ghaziabad

                </p>
                <font>📞 +91-9876543210</font>
                <h3>📧 info@pre-school.com

                </h3>
                <h4>
                    2025 Peas in Pod | All Rights Reserved

                </h4>

            </footer>
        </div>

    )
}
export default LandingPage;