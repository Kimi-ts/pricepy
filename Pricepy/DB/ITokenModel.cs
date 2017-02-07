using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pricepy.DB
{
    public interface ITokenModel
    {
        string Value { get; set; }
        DateTime Expiredate { get; set; }
        bool IsValid(string tokenValue);
        bool IsExpired();
        void UpdateToken(string value, DateTime expiredate);
    }
}