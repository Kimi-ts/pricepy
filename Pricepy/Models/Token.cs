using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.Models
{
    public class Token
    {
        public string Value { get; set; }
        public DateTime Expiredate { get; set; }

        public bool IsValid
        {
            get {
                return DateTime.Now < Expiredate;
            }
        }
    }
}