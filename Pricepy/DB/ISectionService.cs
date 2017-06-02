using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pricepy.DB
{
    public interface ISectionService
    {
        object GetSection(string contentFile, string sectionName);
    }
}