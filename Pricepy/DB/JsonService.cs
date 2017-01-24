using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.DB
{
    public class JsonService: IDBService
    {
        public object GetAllContent(string filename)
        {
            var path = System.Web.HttpContext.Current.Request.MapPath(filename);
            string allText = System.IO.File.ReadAllText(path);

            object jsonObject = JsonConvert.DeserializeObject(allText);
            return jsonObject;
        }
    }
}