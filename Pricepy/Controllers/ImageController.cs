﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace Pricepy.Controllers
{
    public class ImageController : ApiController
    {
        public async Task<HttpResponseMessage> PostImage()
        {
            Dictionary<string, object> dict = new Dictionary<string, object>();
            try
            {
                var httpRequest = HttpContext.Current.Request;

                foreach (string file in httpRequest.Files)
                {
                    HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);

                    var postedFile = httpRequest.Files[file];
                    if (postedFile != null && postedFile.ContentLength > 0)
                    {

                        int MaxContentLength = 2048 * 1024 * 1; //Size = 2 MB

                        IList<string> AllowedFileExtensions = new List<string> { ".jpg", ".gif", ".png" };
                        var ext = postedFile.FileName.Substring(postedFile.FileName.LastIndexOf('.'));
                        var extension = ext.ToLower();
                        var filename = postedFile.FileName;
                        if (!AllowedFileExtensions.Contains(extension))
                        {
                            var message = string.Format("Please Upload image of type .jpg,.gif,.png.");

                            dict.Add("error", message);
                            return Request.CreateResponse(HttpStatusCode.BadRequest, dict);
                        }
                        else if (postedFile.ContentLength > MaxContentLength)
                        {
                            var message = string.Format("Please Upload a file upto 1 mb.");

                            dict.Add("error", message);
                            return Request.CreateResponse(HttpStatusCode.BadRequest, dict);
                        }
                        else
                        {
                            //YourModelProperty.imageurl = userInfo.email_id + extension;
                            //  where you want to attach your imageurl

                            //if needed write the code to update the table

                            //var filePath = HttpContext.Current.Server.MapPath("~/Userimage/" + userInfo.email_id + extension);
                            var filePath = HttpContext.Current.Server.MapPath("~/Content/Images/news/" + filename);
                            //Userimage myfolder name where i want to save my image
                            postedFile.SaveAs(filePath);
                        }
                    }

                    var message1 = string.Format("Image Updated Successfully.");
                    var relativeFilePath = "Content/Images/news/" + postedFile.FileName;
                    return Request.CreateErrorResponse(HttpStatusCode.Created, relativeFilePath); ;
                }
                var res = string.Format("Please Upload a image.");
                dict.Add("error", res);
                return Request.CreateResponse(HttpStatusCode.NotFound, dict);
            }
            catch (Exception ex)
            {
                var res = string.Format("some Message");
                dict.Add("error", res);
                return Request.CreateResponse(HttpStatusCode.NotFound, dict);
            }
        }

    }
}