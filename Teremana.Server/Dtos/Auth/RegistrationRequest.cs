namespace Teremena.Server.Dtos.Auth
{
    public record RegistrationRequest(String Name, String Surname, String Email, String Password, DateOnly Birthdate);
}