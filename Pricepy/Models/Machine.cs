using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.Models
{
    public class Machine
    {
        public string Name { get; set; }
        public bool IsAvailable { get; set; }
        public string AvailibilityLabel { get; set; }
        public bool IsDiscount { get; set; }
        public string Price { get; set; }
    }
}