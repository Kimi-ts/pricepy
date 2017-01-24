using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.Models
{
    public class Token
    {
        public int Value { get; set; }
        public DateTime Expiredate { get; set; }
    }
}