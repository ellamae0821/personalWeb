import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <p >You may email me at <a href="mailto:ella.d.arana@gmail.com"><b>ella.d.arana@gmail.com</b></a> or fill the form below.</p>
        <iframe src="https://www.powr.io/plugins/contact-form/view?unique_label=a5ba3ce9_1513925985&external_type=iframe" width="100%" height="600" frameborder="0"></iframe>
      </div>
    )
  }
}

export default Contact;