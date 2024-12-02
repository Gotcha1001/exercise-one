import ExerciseLady from "@/assets/exersizelady.png"




const Footer = () => {
  return (
    <footer className="gradient-background2 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt basis-1/2 md:0">
        <img src={ExerciseLady} alt="logo" className="h-20 w-14 horizontal-rotate" />
        <p className="my-5">Rights of Admission and protection... All memebers have the right to remain free of any social media content and our company has the right to protect against our Disclaimer Policies</p>
        <p>© EVOGYM ALL Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold text-2xl">Links</h4>
        <p>We can help you find your suitable couch today</p>
        <p>Contact us and we can within a day get someone to reach out to you </p>
        <p>Try us today and you wont be disappointed, 1 month guarenteed success and improvements</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold text-2xl">Contact Us</h4>
        <p>Read about our Testimonials of success</p>
        <p>You deserve to have the best body for this summer </p>
        <p>Only you can decide your future today...</p>
        <p>031-455-334-222</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer