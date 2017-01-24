using Newtonsoft.Json;
using Pricepy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pricepy.Controllers
{
    public class AdminValuesController : ApiController
    {
        public object Get()
        {
            //TO DO
            //Move IO operations into separate classes
            string currentDir = Environment.CurrentDirectory;
            var path = System.Web.HttpContext.Current.Request.MapPath("~\\Content\\adminConfig.json");
            string allText = System.IO.File.ReadAllText(path);

            object jsonObject = JsonConvert.DeserializeObject(allText);
            return jsonObject;
        }

        public Token Post(User userData)
        {
            if (userData == null)
            {
                return null;
            }
            if (userData.Name == "Max" && userData.Password == "Payne")
            {
                Random random = new Random();
                var value = random.Next(100, 1000);
                Token token = new Token { Value = value, Expiredate = DateTime.Now.AddHours(1) };
                //TO DO
                //Write token to DB

                return token;
            }
            return null;
        }
    }
}