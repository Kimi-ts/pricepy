using Newtonsoft.Json;
using Pricepy.DB;
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
        private IDBService _dbService;

        public AdminValuesController(IDBService dbService)
        {
            _dbService = dbService;
        }
        public object Get()
        {
            object jsonObject = new object();
            jsonObject = _dbService.GetAllContent("~\\Content\\adminConfig.json");
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