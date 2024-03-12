using CrudContacto.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CrudContacto.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactoController : ControllerBase
    {
        private readonly DBPRUEBASContext _dbContext;
        public ContactoController(DBPRUEBASContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            try
            {
                List<Contacto> lista = await _dbContext.Contactos.OrderByDescending(c => c.IdContacto).ToListAsync();


                return StatusCode(StatusCodes.Status200OK, lista);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Contacto request)
        {
            await _dbContext.Contactos.AddAsync(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPost]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Contacto request)
        {
            _dbContext.Contactos.Update(request);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Contacto contacto = _dbContext.Contactos.Find(id);
            _dbContext.Contactos.Remove(contacto);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}