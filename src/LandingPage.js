 // import React from "React";
import "./CSS/Landingpage.css";
const LandingPage = () => {
    return (
        < div className = "Header" > <section className="Box">

            <h1>
                LIMS Comparison Dashboard
            </h1>
            <br/>
            <font>
                Compare laboratory sample data with ease and precision.
            </font>
            <br/>
            <button>
                Explore Now
            </button>
        </section>
        <section className="flex-container">
            <section className="flex-box">
                <h3>Data Visulisation</h3>
                <p>Intractive charts and graohs to analyze sample data in real time.</p>
            </section>
            <section className="flex-box">
                <h3>Acuurate Comparisons</h3>
                <p>Compare metrics seamilessly for reliable insights and informed decisions.</p>
            </section>
            <section className="flex-box">
                <h3>Optimised Performance</h3>
                <p>Improve lab productivity by identifying trends and ineffiencies.</p>
            </section>
        </section>
        <footer>@2025 LIMS Comparison Dashboard.All Rights Reserved.</footer>

    </div>

    )
}
export default LandingPage;