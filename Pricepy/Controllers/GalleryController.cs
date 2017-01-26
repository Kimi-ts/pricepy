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
        private IDBService _dbService;

        private string _contentFile = "~\\Content\\contentConfig.json";

        public GalleryController(IDBService dbService)
        {
            _dbService = dbService;
        }
        public bool Post(Machine[] machines)
        {
            var machinesList = new List<Machine>();
            machinesList = machines.ToList();

            return _dbService.UpdateGallery(_contentFile, machinesList);
        }
    }
}