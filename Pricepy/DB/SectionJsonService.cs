using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.DB
{
    public class SectionJsonService : JsonService, ISectionService
    {
        public object GetSection(string contentFile, string sectionName)
        {
            return GetNode(contentFile, sectionName);
        }
    }
}