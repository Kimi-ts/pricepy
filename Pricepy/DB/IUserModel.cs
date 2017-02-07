using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.DB
{
    public interface IUserModel
    {
        string Name { get; set; }
        string Password { get; set; }
        bool IsValid(string name, string pass);
    }
}