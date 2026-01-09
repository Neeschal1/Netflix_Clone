import random
import mailtrap as mt
from server.env_config import Config
from django.core.mail import send_mail

def getotp(firstname, useremail):
    otp_code = random.randint(100000, 999999)
    mail_subject = "Your Netflix Clone Account OTP Verification"
    mail_message = f"""
        Hey {firstname},
        Welcome to Netflix Clone, {firstname}!
        Get ready to watch unlimited movies, series, and exclusive content. Enter this OTP to start your binge-watching journey now!
        <h1 style="font-size: 48px; color: #e50914; text-align: center; margin: 20px 0;">{otp_code}</h1>
        Enjoy your Netflix experience!"""

    html_message = f"""<html>
                <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #ffffff; background-color: #141414; margin: 0; padding: 0;">
                <div style="max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; background-color: #141414;">
                    
                    <h2 style="color: #e50914; text-align: center; font-size: 28px; margin-bottom: 20px;">
                      Welcome to Netflix Clone, firstname!
                    </h2>

                    <p style="font-size: 16px; color: #ffffff;">
                      Your One-Time Password (OTP) to verify your account is:
                    </p>
                    <h1 style="font-size: 48px; color: #e50914; text-align: center; margin: 20px 0;">{otp_code}</h1>

                    <p style="font-size: 16px; color: #ffffff;">
                      Stream unlimited movies, TV shows, and more in your favorite languages. Enter this OTP              to activate your account and start watching instantly.
                    </p>

                    <div style="text-align: center; margin: 30px 0;">
                      <a href="#" style="
                          display: inline-block;
                          background-color: #e50914;
                          color: #ffffff;
                          text-decoration: none;
                          padding: 12px 30px;
                          border-radius: 4px;
                          font-weight: bold;
                          font-size: 16px;
                        ">
                        Verify Account
                      </a>
                    </div>

                    <p style="font-size: 14px; color: #888888; text-align: center;">
                      If you didn't request this, you can safely ignore this email.<br>
                      &copy; {2026} Netflix Clone. All rights reserved.
                    </p>
                          </div>
                      </body>
                      </html>"""

    send_mail(
        subject=mail_subject,
        message=mail_message,
        from_email=Config.EMAIL,
        recipient_list=[useremail],
        fail_silently=False,
        html_message=html_message,
    )

    return otp_code
