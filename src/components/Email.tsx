import '../styles/email.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


interface EmailProps {
  show: boolean;
  onClose: () => void;
}

function Email({ show, onClose }: EmailProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          alert('Email sent successfully!');
          formRef.current?.reset();
          onClose();
        },
        (error) => {
          alert('Failed to send email. Please try again.');
          console.error(error);
        }
      );
  };

  if (!show) return null;

  return (
    <div id="modal-overlay">
      <div id="modal-content">
        <button onClick={onClose} id="close-modal"> X </button>
        <h3 id="modal-header"> Contact Me! </h3>

        <form ref={formRef} onSubmit={sendEmail} id="email-form">
          <div id="email-input">
            <label htmlFor="email" id="email-text"> Email (Required) </label>
            <input type="email" name="email" className='form-input-box' required />
          </div>

          <div id="subject-input">
            <label htmlFor="subject" id="subject-text"> Email Subject (Required) </label>
            <input type="text" name="subject" className='form-input-box' required />
          </div>

          <div id="message-input">
            <label htmlFor="message" id="message-text"> Message (Required) </label>
            <textarea rows={5} name="message" id='form-message-box' required></textarea>
          </div>

          <p id='email-note'> Note: Due to EmailJS verification requirements, this message will be sent from my verified email address. However, the email you provide will be included as the reply-to address so I can respond to you directly. </p>

          <button type="submit" id='submit-button'> Send Email </button>

        </form>

      </div>
    </div>
  );
}

export default Email;
