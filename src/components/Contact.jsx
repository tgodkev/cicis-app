import React from "react";
import Accordion from "./Accordion";


function Contact(){
    const accordionData = [
        {
        title: 'When will my order be ready',
        content: 'Weekdays after 5 and weekends on scheduled pickup or deliver (fees apply)'
      },
      {
          title: "What all on these boards?",
          content: "Well it depends on the season, but always the fresest meats cheeses and fruits I can find"
      },
      {
         title: 'Can I order a custom board??',
         content: 'Sure can! need 48 hours ahead of pickup date for custom orders.'
          
      },
    ]
    


   

    return(
        <div className="contact">
            <h1>  Frequently asked questions..</h1>
            <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>

        </div>
    )
}


export default Contact;