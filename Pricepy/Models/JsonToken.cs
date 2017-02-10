using Pricepy.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.Models
{
    public class JsonToken:ITokenModel
    {
        private IDBService _dbService;
        private string _securityDataFile = "~\\Content\\adminSecurityInfo.json";
        public JsonToken(IDBService dbService)
        {
            _dbService = dbService;
        }

        public bool IsValid(string tokenValue)
        {
            var token = _dbService.GetNodeValue(_securityDataFile, "token");
            return token == tokenValue && IsExpired();
        }

        public bool IsExpired()
        {
            var expireDateString = _dbService.GetNodeValue(_securityDataFile, "expires");
            DateTime expireDate = DateTime.Parse(expireDateString);
            return DateTime.Now < expireDate;
        }

        public void UpdateToken(string value, DateTime expiredate)
        {
            _dbService.UpdateNodeValue(_securityDataFile,
                new Dictionary<string, string>()
                {
                                    { "token", value },
                                    { "expires", expiredate.ToString() }
                });
        }
    }
}