using Pricepy.DB;
using Pricepy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;

namespace Pricepy.Controllers
{
    public class MessagesController : ApiController
    {
        private IMessageClient _messageClient;

        public MessagesController(IMessageClient messageClient)
        {
            _messageClient = messageClient;
        }

        public bool Post(MessageData data)
        {
            if (data == null)
            {
                return false;
            }

            var email = WebConfigurationManager.AppSettings["customEmail"];

            return _messageClient.SendMessage(email, data);
        }
    }
}