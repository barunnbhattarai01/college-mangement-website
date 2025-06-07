import { useState } from "react";
 import { GoogleGenerativeAI } from "@google/generative-ai"
import ReactMarkdown from 'react-markdown'; 



function Contact() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const[error,seterror]=useState("");


const api_key = import.meta.env.VITE_GEMINI_AI_API_KEY;

 const genertecontent = async()=>{

    if(!question.trim()){
seterror("please enter the question");

    }
    seterror("");

    try{
     const GenAI = new GoogleGenerativeAI(api_key); //create the object to access the googlegenreative ai class
     const model = GenAI.getGenerativeModel({ model: "gemini-1.5-flash"}); //use method to get model
     const result = await model.generateContent(question); //now we request the model to gemreatae content and it give us object
      const textresponse = result.response.text(); //it first take response from model and convert it into text
      setAnswer(textresponse);
  

    }
    catch(err){
      console.error("Error",err)
    }




 }


  // const handledown =(e)=>
  // {
  //  e.preventDefault();
  //  genertecontent();


  // }



  return (
    <>
      {/* Contact Info */}
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6 md:p-10 rounded-xl shadow-md max-w-3xl mx-auto mt-10 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Contact Information</h2>
        <p className="text-xl md:text-2xl">
          <span className="font-semibold">Address:</span> Apex College, Mid Baneshwor, Kathmandu
        </p>
        <p className="pt-2 text-xl md:text-2xl">
          <span className="font-semibold">Phone:</span> +977-01-4478841
        </p>
        <p className="pt-2 text-xl md:text-2xl">
          <span className="font-semibold">Email:</span> info@apexcollege.edu.np
        </p>
      </div>

      {/* Google Maps */}
      <div className="pt-24 flex flex-col items-center px-4">
        <span className="font-bold text-3xl mb-9 text-gray-800 dark:text-white text-center">
          Way to Apex College
        </span>
        <div className="w-full max-w-4xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5935350529885!2d85.33539907578948!3d27.698954976187316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199940d81663%3A0xaf36b9b58903050f!2sApex%20College!5e0!3m2!1sen!2snp!4v1746447017023!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl w-full"
          />
        </div>
      </div>
  
   {/*Gemini ai implenet*/}
    <div className="flex  gap-3 h-auto ml-96 mt-10 flex-col ">
            <h1 className="text-2xl">Gemini AI Chat</h1>
            <div className="">
                <textarea
                    className="prompt-input"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
      
                    placeholder="Ask Gemini anything..."
                    rows="4"
                ></textarea>
                <button onClick={genertecontent} disabled={loading} className="cursor-pointer">
                    {loading ? 'Sending...' : 'Send to AI'}
                </button>
            </div>

</div>

   {error && <p className="text-2xl">{error}</p>}

   {answer &&(
     <div className="">
      
  <ReactMarkdown>{answer}</ReactMarkdown>
     </div>



   )
   }
  

  </>
  );
}

export default Contact;
