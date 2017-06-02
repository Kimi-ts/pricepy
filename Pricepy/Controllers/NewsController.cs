using Pricepy.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pricepy.Controllers
{
    public class NewsController : ApiController
    {
        private IDBService _dbService;

        private string _contentFile = "~\\Data\\contentConfig.json";

        public NewsController(IDBService dbService)
        {
            _dbService = dbService;
        }

        // GET api/values
        public object Post(string newsArray)
        {
            object sectionObject = null;
            //if (!string.IsNullOrEmpty(sectionName))
            //{
            //    sectionObject = _dbService.GetNode(_contentFile, sectionName);
            //}

           // _dbService.UpdateNodeValue(_contentFile, 
            return sectionObject;
        }
    }
}