﻿using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Pricepy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.DB
{
    public class JsonService : IDBService
    {
        //NOTE
        //to make it reusable - pass connection string to every method as parameter

        //NOTE
        //JSON service returns values only on the top document-level

        public object GetNode(string filename, string nodeName)
        {
            string allText = ReadFileContent(filename);
            JObject jObject = JObject.Parse(allText);
            object node = jObject[nodeName];
            return node;
        } 

        public string GetNodeValue(string filename, string nodeName)
        {
            string allText = ReadFileContent(filename);
            JObject jObject = JObject.Parse(allText);
            string nodeValue = (string)jObject[nodeName];
            return nodeValue;
        }

        public void UpdateTopLevelNode(string filename, Dictionary<string,string> newValues)
        {
            string allText = ReadFileContent(filename);
            JObject jObject = JObject.Parse(allText);
            foreach (var item in newValues)
            {
                jObject[item.Key] = item.Value;                                                                                               
            }
            string strContent = jObject.ToString();
            WriteFileContent(filename, strContent);
        }

        protected string ReadFileContent(string filename)
        {
            var path = System.Web.HttpContext.Current.Request.MapPath(filename);
            string allText = System.IO.File.ReadAllText(path);
            return allText;
        }

        protected void WriteFileContent(string filename, string newContent)
        {
            var path = System.Web.HttpContext.Current.Request.MapPath(filename);
            System.IO.File.WriteAllText(path, newContent);
        }
    }
}