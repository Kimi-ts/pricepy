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
        private ISectionService _sectionService;

        private string _contentFile = "~\\Data\\contentConfig.json";

        public ValuesController(ISectionService sectionService)
        {
            _sectionService = sectionService;
        }

        // GET api/values
        public object Get(string sectionName)
        {
            object sectionObject = null;
            if (!string.IsNullOrEmpty(sectionName))
            {
                sectionObject = _sectionService.GetSection(_contentFile, sectionName);
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
