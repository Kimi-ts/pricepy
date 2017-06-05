using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.DB
{
    public class NewsJsonService : JsonService, INewsService
    {
        public bool UpdateNewsArray(string filename, string newNewsArray)
        {
            var json = ReadFileContent(filename);

            JObject rss = JObject.Parse(json);
            rss["home"]["sections"] = JToken.Parse(newNewsArray);

            var newFileContent = rss.ToString();

            WriteFileContent(filename, newFileContent);
            return true;
        }
    }
}