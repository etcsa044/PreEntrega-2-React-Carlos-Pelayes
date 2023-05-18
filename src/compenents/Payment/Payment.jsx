import React, { useState } from "react";
import "./Payment.css";


export const Payment = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [showPayButton, setShowPayButton] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);




  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleConfirmEmailChange = (evt) => {
    setConfirmEmail(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (email === confirmEmail) {
      setShowPayButton(true);
    } else {
      setShowPayButton(false);
    }
  };

  const handlePay = () => {
    setPaymentSuccess(true);
  };

  return (
    <div>
      {paymentSuccess ? (
        <h2>Su pago fue realizado con éxito</h2>
      ) : (
        <form className="payment_form" onSubmit={handleSubmit}>
          <section className="info">
            <article>
              <label htmlFor="name" required>
                Ingrese su nombre
              </label>
              <input type="text" id="name" />
            </article>
            <article>
              <label htmlFor="last_name" required>
                Ingrese su apellido
              </label>
              <input type="text" id="last_name" />
            </article>
          </section>

          <label htmlFor="mail">Ingrese su mail</label>
          <input type="email" id="mail" required onChange={handleEmailChange} />

          <label htmlFor="mail_d">Re ingrese su mail</label>
          <input
            type="email"
            id="mail_d"
            required
            onChange={handleConfirmEmailChange}
          />

          {showPayButton ? (
            <button type="button" onClick={handlePay}>
              Pagar
            </button>
          ) : (
            <input type="submit" value="Enviar" id="submit" />
          )}
        </form>
      )}
    </div>
  );
};


