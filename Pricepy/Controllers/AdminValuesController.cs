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
        private string _contentFile = "~\\Content\\contentConfig.json";

        private IUserModel _user;
        private ITokenModel _token;

        public AdminValuesController(IDBService dbService, IUserModel userModel, ITokenModel token)
        {
            _dbService = dbService;
            _user = userModel;
            _token = token;
        }

        //NOTE:
        //get /api/AdminValues - here we do token validation
        //but the sections return from content file
        public object Get(string sectionName)
        {
            object jsonObject = null;

            if (!string.IsNullOrEmpty(sectionName))
            {
                IEnumerable<string> headerValues;
                var tokenValue = string.Empty;
                if (Request.Headers.TryGetValues("X-Token", out headerValues))
                {
                    tokenValue = headerValues.FirstOrDefault();
                }

                if (!string.IsNullOrEmpty(tokenValue))
                {
                    if (_token.IsValid(tokenValue))
                    {
                        _token.UpdateToken(tokenValue, DateTime.Now.AddHours(1));
                        jsonObject = _dbService.GetNode(_contentFile, sectionName);
                    }
                }
            }
            return jsonObject;

        }

        public TokenRequestModel Post(UserRequestModel user)
        {
            if (user != null)
            {
                if (_user.IsValid(user.Name, user.Password))
                {
                    Random random = new Random();
                    var value = random.Next(100, 1000);
                    TokenRequestModel token = new TokenRequestModel { Value = value.ToString(), Expiredate = DateTime.Now.AddHours(1) };

                    _token.UpdateToken(value.ToString(), DateTime.Now.AddHours(1));

                    return token;
                }
            }
            return null;
        }
    }
}