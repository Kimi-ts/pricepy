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
    public class GalleryController : ApiController
    {
        private IDBService _dbService;

        private string _contentFile = "~\\Content\\contentConfig.json";

        public GalleryController(IDBService dbService)
        {
            _dbService = dbService;
        }
        public bool Post(Machine[] machines)
        {
            var machinesList = new List<Machine>();
            //for (var i = 0; i < machines.Count(); i++)
            //{
            //    machinesList.Add(machines[i];
            //}

            machinesList = machines.ToList();
            _dbService.Update(_contentFile, machinesList);
            //if (userData == null)
            //{
            //    return null;
            //}

            //var name = _dbService.GetNodeValue(_securityDataFile, "name");
            //var password = _dbService.GetNodeValue(_securityDataFile, "password");

            //if (userData.Name == name && userData.Password == password)
            //{
            //    Random random = new Random();
            //    var value = random.Next(100, 1000);
            //    Token token = new Token { Value = value.ToString(), Expiredate = DateTime.Now.AddHours(1) };
            //    _dbService.UpdateNodeValue(_securityDataFile,
            //        new Dictionary<string, string>()
            //    {
            //        { "token", token.Value },
            //        { "expires", token.Expiredate.ToString() }
            //    });

            //    return token;
            //}
            return false;
        }

        //public bool Post([FromBody]string data)
        //{
        //    return false;
        //}
    }
}