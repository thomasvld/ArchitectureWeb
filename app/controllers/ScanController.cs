using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class ScanController : ControllerBase
{
    private readonly List<Scan> _scans = new List<Scan>
    {
        new Scan { id = 1, Name = "Scan 1", ImageUrl = "C:\Users\thoma\Desktop\ProjetArchitectureWebFinal\projet-erasmus\public\uploads\onepiece\is-this-why-roger-and-his-crew-laughed-v0-ymuov9nlwlga1.jpg" },
        new Scan { id = 2, Name = "Scan 2", ImageUrl = "C:\Users\thoma\Desktop\ProjetArchitectureWebFinal\projet-erasmus\public\uploads\naruto\unnamed.jpg" },
        new Scan { id = 3, Name = "Scan 3", ImageUrl = "C:\Users\thoma\Desktop\ProjetArchitectureWebFinal\projet-erasmus\public\uploads\bleach\main-qimg-181e4ffde6e280f8dbe442061ebbf7b9-lq.jpg" },
    };

    [HttpGet]
    public IEnumerable<Scan> Get()
    {
        return _scans;
    }
}