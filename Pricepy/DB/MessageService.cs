using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Pricepy.Models;
using System.Net.Mail;

namespace Pricepy.DB
{
    public class MessageService : IMessageClient
    {
        public bool SendMessage(string email, MessageData message)
        {
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            mail.From = new MailAddress("hrenovina123@gmail.com");
            mail.To.Add(email);
            mail.Subject = "This message goes from BigTrailler-Minsk web site";
            mail.Body = string.Format("UserName: {0}\nEmail: {1}\nTextMessage: {2}", message.UserName, message.UserEmail, message.Message);

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("hrenovina123@gmail.com", "hrenovina123");
            SmtpServer.EnableSsl = true;

            try
            {
                SmtpServer.Send(mail);
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}