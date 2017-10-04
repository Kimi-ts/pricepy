using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pricepy.DB
{
    public interface INewsService
    {
        bool UpdateNewsArray(string filename, string newNewsArray);

        bool UpdateBannersArray(string filename, string bannersArray);
    }
}