using Pricepy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pricepy.DB
{
    public interface IMessageClient
    {
        bool SendMessage(string email, MessageData message);
    }
}