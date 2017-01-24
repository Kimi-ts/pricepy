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
        private string _configFile = "~\\Content\\adminConfig.json";
        private string _securityDataFile = "~\\Content\\adminSecurityInfo.json";

        public AdminValuesController(IDBService dbService)
        {
            _dbService = dbService;
        }
        public object Get()
        {
            object jsonObject = new object();
            jsonObject = _dbService.GetAllContent(_configFile);
            return jsonObject;
        }

        public Token Post(User userData)
        {
            if (userData == null)
            {
                return null;
            }

            var name = _dbService.GetNodeValue(_securityDataFile, "name");
            var password = _dbService.GetNodeValue(_securityDataFile, "password");

            if (userData.Name == name && userData.Password == password)
            {
                Random random = new Random();
                var value = random.Next(100, 1000);
                Token token = new Token { Value = value.ToString(), Expiredate = DateTime.Now.AddHours(1) };
                _dbService.UpdateNodeValue(_securityDataFile, 
                    new Dictionary<string, string>()
                {
                    { "token", token.Value },
                    { "exrires", token.Expiredate.ToString() }
                });

                return token;
            }
            return null;
        }
    }
}