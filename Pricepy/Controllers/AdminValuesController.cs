using Newtonsoft.Json;
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
        public object Get()
        {
            string currentDir = Environment.CurrentDirectory;
            var path = System.Web.HttpContext.Current.Request.MapPath("~\\Content\\adminConfig.json");
            string allText = System.IO.File.ReadAllText(path);

            object jsonObject = JsonConvert.DeserializeObject(allText);
            return jsonObject;
        }
    }
}