package live.rkozik.pm_app.backend.models;

public class User {

    private String email;
    private Character[] password;
    private String name;
    private String surname;


    public User(String email, Character[] password, String name, String surname) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
    }
}
