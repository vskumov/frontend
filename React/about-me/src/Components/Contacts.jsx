import React from "react";

function Contacts() {
  return (
    <div className="container">
      <h3>Контакты</h3>
      <p>
        Если хотите что-то предложить или задать вопрос, лучший способ
        это сделать — написать письмо по электронной почте v.kumov@gmail.com
      </p>
      <ul className="social last-element">
        <li><i class="lab la-telegram"></i> <a href="https://t.me/vkumov" target="_blank" rel="noreferrer">telegram</a></li> 
        <li><i class="lab la-twitter"></i> <a href="http://www.twitter.com/vkumov" target="_blank" rel="noreferrer">twitter</a></li>
        <li><i class="lab la-linkedin"></i> <a href="https://www.linkedin.com/in/vkumov/" target="_blank" rel="noreferrer">linkedin</a></li>
        </ul>
    </div>
  );
}

export default Contacts;
