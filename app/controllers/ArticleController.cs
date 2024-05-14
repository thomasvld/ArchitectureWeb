using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class ArticleController : ControllerBase
{
    private readonly List<Article> _articles = new List<Article>
    {
        new Article { id = 1, Name = "Canapé", ImageUrl = "C:\Users\thoma\Desktop\ProjetArchitectureWebFinal\projet-erasmus\public\uploads\onepiece\is-this-why-roger-and-his-crew-laughed-v0-ymuov9nlwlga1.jpg" },
        new Article { id = 2, Name = "Théière", ImageUrl = "C:\Users\thoma\Desktop\ProjetArchitectureWebFinal\projet-erasmus\public\uploads\naruto\unnamed.jpg" },
        new Article { id = 3, Name = "Télévision", ImageUrl = "C:\Users\thoma\Desktop\ProjetArchitectureWebFinal\projet-erasmus\public\uploads\bleach\main-qimg-181e4ffde6e280f8dbe442061ebbf7b9-lq.jpg" },
    };

    [HttpGet]
    public IEnumerable<Article> Get()
    {
        return _articles;
    }
}