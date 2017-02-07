using Pricepy.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.Models
{
    public class JsonUser : IUserModel
    {
        private string _name;
        private string _password;

        private IDBService _dbService;
        private string _securityDataFile = "~\\Content\\adminSecurityInfo.json";

        public JsonUser(IDBService dbService)
        {
            _dbService = dbService;
        }
        public string Name
        {
            get
            {
                return _name;
            }

            set
            {
                _name = value;
            }
        }

        public string Password
        {
            get
            {
                return _password;
            }

            set
            {
                _password = value;
            }
        }

        public bool IsValid(string name, string pass)
        {
            var namefromDB = _dbService.GetNodeValue(_securityDataFile, "name");
            var passwordFromDB = _dbService.GetNodeValue(_securityDataFile, "password");

            return (name == namefromDB && pass == passwordFromDB);
        }
    }
}