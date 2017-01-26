﻿using Newtonsoft.Json;
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

        //TO DO
        //Create separate file for sensitive admin data and read it, if authenticated
        private string _securityDataFile = "~\\Content\\adminSecurityInfo.json";

        public AdminValuesController(IDBService dbService)
        {
            _dbService = dbService;
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
                    var token = _dbService.GetNodeValue(_securityDataFile, "token");

                    if (tokenValue == token)
                    {
                        var expires = _dbService.GetNodeValue(_securityDataFile, "expires");
                        DateTime expiredate = DateTime.Parse(expires);
                        Token securityToken = new Token { Value = token, Expiredate = expiredate };
                        if (securityToken.IsValid)
                        {
                            var newDateValue = DateTime.Now.AddHours(1);
                            _dbService.UpdateNodeValue(_securityDataFile,
                                new Dictionary<string, string>()
                            {
                            { "expires", newDateValue.ToString() }
                            });
                            jsonObject = _dbService.GetNode(_contentFile, sectionName);
                        }
                    }
                }
            }
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
                    { "expires", token.Expiredate.ToString() }
                });

                return token;
            }
            return null;
        }
    }
}