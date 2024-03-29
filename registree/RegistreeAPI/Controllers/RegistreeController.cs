using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RegistreeAPI.Models;
using RegistreeAPI.Data;

namespace RegistreeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistreeController : ControllerBase
    {
        private readonly RegistreeContext _context;

        public RegistreeController(RegistreeContext context)
        {
            _context = context;
        }

        // Implement your controller actions here
    }
}
