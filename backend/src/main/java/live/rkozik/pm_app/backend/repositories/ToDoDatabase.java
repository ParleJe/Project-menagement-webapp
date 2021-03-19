package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.ToDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ToDoDatabase implements CommandLineRunner {

    private final ToDoRepository repository;

    @Autowired
    public ToDoDatabase(ToDoRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        ToDo todo = new ToDo();
        todo.setName("Frodo Baggins");
        this.repository.save(todo);
    }
}
