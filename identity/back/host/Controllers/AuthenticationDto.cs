public class AuthenticationDto
{
    public string Login { get; }
    public string Password { get; }

    public AuthenticationDto(string login, string password)
    {
        Login = login ?? throw new System.ArgumentNullException(nameof(login));
        Password = password ?? throw new System.ArgumentNullException(nameof(password));
    }
}