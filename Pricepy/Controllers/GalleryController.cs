using Pricepy.DB;
using Pricepy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pricepy.Controllers
{
    public class GalleryController : ApiController
    {
        private IGalleryService _galleryService;

        private string _contentFile = "~\\Data\\contentConfig.json";

        public GalleryController(IGalleryService galleryService)
        {
            _galleryService = galleryService;
        }
        public bool Post(Machine[] machines)
        {
            var machinesList = new List<Machine>();
            machinesList = machines.ToList();
            return _galleryService.UpdateGallery(_contentFile, machinesList);
        }
    }
}