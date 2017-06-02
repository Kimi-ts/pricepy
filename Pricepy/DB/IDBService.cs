using Newtonsoft.Json.Linq;
using Pricepy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pricepy.DB
{
    public interface IDBService
    {
        object GetNode(string filename, string nodeName);
        string GetNodeValue(string filename, string nodeName);
        void UpdateTopLevelNode(string filename, Dictionary<string, string> newValues);
    }
}