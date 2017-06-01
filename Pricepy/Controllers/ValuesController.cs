using Newtonsoft.Json;
using Pricepy.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pricepy.Controllers
{
    public class ValuesController : ApiController
    {
        private IDBService _dbService;

        private string _contentFile = "~\\Data\\contentConfig.json";

        public ValuesController(IDBService dbService)
        {
            _dbService = dbService;
        }

        // GET api/values
        public object Get(string sectionName)
        {

            //_dbService.Update(_contentFile, "");
            object sectionObject = null;
            if (!string.IsNullOrEmpty(sectionName))
            {
                sectionObject = _dbService.GetNode(_contentFile, sectionName);
            }
            return sectionObject;
        }

        //// GET api/values/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //public void Delete(int id)
        //{
        //}
    }
}
