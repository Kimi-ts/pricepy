using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pricepy.DB
{
    public interface IPageModel
    {
        object GetData(string pageName);
    }
}