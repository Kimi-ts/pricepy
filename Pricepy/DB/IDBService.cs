﻿using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pricepy.DB
{
    public interface IDBService
    {
        object GetAllContent(string filename);
        object GetNode(string filename, string nodeName);
        string GetNodeValue(string filename, string nodeValue);
    }
}