const newUserLoginTemplate = ({ username, email }) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>New Login Notification</title>
      <style>
        body {
          background-color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #333333;
          margin: 0;
          padding: 0;
        }
    
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
    
        .logo {
          max-width: 200px;
          margin-bottom: 20px;
        }
    
        .message {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
    
        .body {
          font-size: 16px;
          margin-bottom: 20px;
        }
    
        .cta {
          display: inline-block;
          padding: 10px 20px;
          background-color: #FFD60A;
          color: #000000;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          margin-top: 20px;
        }
    
        .support {
          font-size: 14px;
          color: #999999;
          margin-top: 20px;
        }
    
        .highlight {
          font-weight: bold;
        }
      </style>
    
    </head>
    
    <body>
      <div class="container">
<img class="logo" src="https://i.ibb.co/yhcYp0R/picprismlogo.png" alt="picprismlogo" border="0">      <div class="message">New Login Notification</div>
        <div class="body">
          <p>Dear ${username},</p>
          <p>We noticed a login to your DevBhoomi account using the email: <strong>${email}</strong>. If this was you, there’s nothing to worry about.</p>
          <p>If you didn’t log in, please immediately <a href="mailto:himanshu1662.be22@gmail.com">contact us</a> to secure your account.</p>
          <p>For your security, we recommend changing your password regularly. If you need assistance, feel free to reach out to us.</p>
        </div>
        <div class="support">If you have any questions or need assistance, please feel free to reach out to us at 
        <a href="mailto:himanshu1662.be22@gmail.com">himanshu1662.be22@gmail.com</a>. We are here to help!</div>
      </div>
    </body>
    
    </html>`;
};

module.exports = newUserLoginTemplate;
