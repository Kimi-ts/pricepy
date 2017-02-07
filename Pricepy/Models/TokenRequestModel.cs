using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.Models
{
    public class TokenRequestModel
    {
        public string Value { get; set; }
        public DateTime Expiredate { get; set; }
    }
}