import React from 'react'

const OurLocation = () => {
    return (
        <>
            <div className="container mt-5" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h2 className='mb-5 heading' style={{
                    textTransform: "capitalize",
                    fontSize: "2rem",
                    fontWeight: "700",
                   color:"#3d9d94"
                }}>
                    our live location
                </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7915881316467!2d77.42705757549982!3d28.606028475679302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6165728471%3A0xf027989e066991a4!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1715253051157!5m2!1sen!2sin"
                    style={{ border: 0, width: "100%", height: "60vh" }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </>
    )
}

export default OurLocation