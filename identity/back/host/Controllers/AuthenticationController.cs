using System;
using Microsoft.AspNetCore.Mvc;

[Route("api/auth")]
public class AuthenticationController : Controller
{
    [HttpPost]
    public IActionResult Authenticate([FromBody]AuthenticationDto authDto)
    {
        if ("login".Equals(authDto.Login, StringComparison.OrdinalIgnoreCase) &&
            "password".Equals(authDto.Password))
        {
            return Ok();
        }

        return BadRequest();
    }
}