using Newtonsoft.Json.Linq;
using Pricepy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.DB
{
    public class GalleryJsonService: JsonService, IGalleryService
    {
        public bool UpdateGallery(string filename, List<Machine> machines)
        {
            var json = ReadFileContent(filename);

            JObject rss = JObject.Parse(json);

            var galleryItems = from p in rss["machines"]["gallery"]["items"]
                               select p;

            foreach (var sourceItem in machines)
            {
                foreach (var item in galleryItems)
                {
                    if ((string)item["name"] == sourceItem.Name)
                    {
                        item["availibility"] = sourceItem.IsAvailable;
                        item["availibilityLabel"] = sourceItem.AvailibilityLabel;
                        item["discount"] = sourceItem.IsDiscount;
                        item["price"] = sourceItem.Price;
                    }
                }
            }

            //updated json object
            var newFileContent = rss.ToString();
            WriteFileContent(filename, newFileContent);
            return true;
        }
    }
}