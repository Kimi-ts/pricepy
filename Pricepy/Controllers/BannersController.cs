using Pricepy.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pricepy.Controllers
{
    public class BannersController : ApiController
    {
        private INewsService _newsService;

        private string _contentFile = "~\\Data\\contentConfig.json";

        public BannersController(INewsService newsService)
        {
            _newsService = newsService;
        }

        // GET api/values
        [HttpPost]
        public object Post([FromBody]string newsArrayObject)
        {
            object sectionObject = null;
            if (!string.IsNullOrEmpty(newsArrayObject))
            {
                sectionObject = _newsService.UpdateBannersArray(_contentFile, newsArrayObject);
            }

            return sectionObject;
        }
    }
}