using System;

namespace RegistreeApi.Models
{
    public class Registree
    {
        public int Id { get; set; }
        public string RegistreeName { get; set; }
        public string RegistreeLink { get; set; }
        public string Vendor { get; set; }
        public bool Share { get; set; }
    }
}
