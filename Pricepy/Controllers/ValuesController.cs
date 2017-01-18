using Newtonsoft.Json;
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
        // GET api/values
        public object Get()
        {
            string currentDir = Environment.CurrentDirectory;
            var path = System.Web.HttpContext.Current.Request.MapPath("~\\Content\\contentConfig.json");
            string allText = System.IO.File.ReadAllText(path);

            object jsonObject = JsonConvert.DeserializeObject(allText);
            return jsonObject;
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
