document.addEventListener("DOMContentLoaded",function(){var s=document.querySelector("#contact-form"),n=document.querySelector("#contact-form-submit"),r=document.querySelector("#contact-form-reset"),o=document.querySelector(".form-message");void 0!==s&&(s.addEventListener("submit",e=>{e.preventDefault(),n.innerHTML="Sending...",n.disabled=!0;var t=new FormData(s),e=Object.fromEntries(t.entries()),t=new XMLHttpRequest;t.open("POST","https://us-central1-understory-d236f.cloudfunctions.net/contactForm"),t.onreadystatechange=function(){4==this.readyState&&(200==this.status?(console.info(this.response),n.innerHTML="Message Sent!",o.classList.add("form-message--success"),o.innerHTML="Thanks for reaching out to Understory Woodworking. I'll get back to you shortly.",pa.track({name:"Contact Form - Message sent"})):500!=this.status&&422!=this.status||(console.error(this.response),n.innerHTML="Sending Failed...",o.classList.add("form-message--fail"),o.innerHTML="Oh no! Something went wrong while sending your message. If this error continues, please use the email address listed in the FAQ below to reach me.",pa.track({name:"Contact Form - Sending Failed"})),r.classList.remove("hide"))},t.send(JSON.stringify(e))}),r.addEventListener("click",e=>{e.preventDefault(),s.reset(),n.disabled=!1,n.innerHTML="Send",o.innerHTML="",o.classList.remove("form-message--fail"),o.classList.remove("form-message--success"),r.classList.add("hide")}))});