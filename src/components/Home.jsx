import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillYoutube, AiFillAmazonCircle, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>Ritik22-tech</h1>
                    <p>Solutions to all your Problems</p>
                </main>
            </div>

            <div className="home2" >
                <img src={vg} alt="...Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque, nobis modi sunt fugiat doloribus architecto harum assumenda sed a numquam, animi blanditiis possimus qui quaerat. Debitis enim possimus laudantium consequuntur dolorem. Quo, ducimus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, alias ea quae maiores beatae minima quibusdam rem aperiam, accusamus eaque nam delectus aliquam dolor tempore atque, consequatur quia ab quas. Quidem adipisci amet architecto!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos modi sapiente, nostrum natus ad delectus vero suscipit ratione est saepe dolor itaque beatae amet explicabo eaque sequi nihil quasi? Dolore laudantium consequatur voluptatum.
                    </p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "0.8s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home