import React from 'react'

const footer = props => {
    return (
        <section id="footer">
        <div className="inner">
          <h2 className="major">Get in touch</h2>
          <p>Please feel free to reach out if you have any questions or would like to get to know more about me. I hope that by working together we can build something that will make a difference.</p>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </form>
          <ul className="contact">
            <li className="fa-phone">(760) 791-7439</li>
            <li className="fa-envelope">ahravdutta02@gmail.com</li>
            <li className="fa-facebook"><a href="https://www.facebook.com/ahrav.dutta">facebook.com/https://www.facebook.com/ahrav.dutta</a></li>
          </ul>
          <ul className="copyright">
            <li>Ahrav Dutta Inc. All rights reserved.</li>
          </ul>
        </div>
      </section>
    )
}

export default footer