using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.DB
{
    public interface IUserModel
    {
        bool IsValid(string name, string pass);
    }
}