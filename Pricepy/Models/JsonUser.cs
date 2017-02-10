using Pricepy.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.Models
{
    public class JsonUser : IUserModel
    {
        private IDBService _dbService;
        private string _securityDataFile = "~\\Content\\adminSecurityInfo.json";

        public JsonUser(IDBService dbService)
        {
            _dbService = dbService;
        }

        public bool IsValid(string name, string pass)
        {
            var namefromDB = _dbService.GetNodeValue(_securityDataFile, "name");
            var passwordFromDB = _dbService.GetNodeValue(_securityDataFile, "password");

            return (name == namefromDB && pass == passwordFromDB);
        }
    }
}