using Pricepy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pricepy.Controllers
{
    public class MessagesController : ApiController
    {
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        public bool Post(FormData data)
        {
            if (data == null)
            {
                //To Do:
                //Add DB logic here
                return false;
            }
            return true;
        }
    }
}