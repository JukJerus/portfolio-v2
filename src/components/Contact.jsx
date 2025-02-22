import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect , useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_SERVICE_ID; 
      const templateId = import.meta.env.VITE_TEMPLATE_ID;


      const templateParams = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        phone : phone,
        message : message
      }

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response)=>{
          console.log('Email Sent successfully', response);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        })
        .catch((error)=>{
          console.error('Email Sent failed', error);
        })
    }

  useEffect(() => {
    AOS.init(
      {
        duration: 2000,
        once: false,
      },
      []
    );
  });
  return (
    <div id="contact" className="mt-30 md:mt-50">
      <div
        data-aos="zoom-out-right"
        className="flex flex-col md:flex-row mx-auto items-center md:gap-10 justify-evenly md:w-7/10 mt-20 p-3"
      >
        <div className="mb-5 text-center">
          <h1 className="text-amber-500 font-bold text-3xl">
            Contact <span className="text-white">Me</span>
          </h1>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={email}
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={firstName}
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer"
                placeholder=" "
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={lastName}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer"
                placeholder=" "
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-1">
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={phone}
                type="tel"
                pattern="[0-9]{8,12}"
                name="floating_phone" 
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer"
                placeholder=" "
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (+62)
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white ">
              Your message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-white rounded-lg border focus:ring-amber-500 focus:border-amber-500 bg-gray-600 dark:placeholder-gray-400"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="text-white cursor-pointer bg-amber-500 hover:bg-amber-600 mt-5 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
