package live.rkozik.pm_app.backend.controllers;

import live.rkozik.pm_app.backend.repositories.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToDoController {

    final private ToDoRepository repository;

    @Autowired
    public ToDoController(ToDoRepository _repository) {
        this.repository = _repository;
    }

    @GetMapping("/ToDo")
    public String getAllToDos() {
        repository.findAll();
        return "Hello World";
    }

}
