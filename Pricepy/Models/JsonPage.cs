using Pricepy.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.Models
{
    public class JsonPage : IPageModel
    {
        private IDBService _dbService;
        private string _contentFile = "~\\Data\\contentConfig.json";

        public JsonPage(IDBService dbService)
        {
            _dbService = dbService;
        }
        public object GetData(string pageName)
        {
            object jsonObject = null;
            if (!string.IsNullOrEmpty(pageName))
            {
                jsonObject = _dbService.GetNode(_contentFile, pageName);
            }
            return jsonObject;
        }
    }
}