package live.rkozik.pm_app.backend.controllers;

import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import live.rkozik.pm_app.backend.services.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ToDoController extends AbstractController {

    private final ToDoService service;

    @Autowired
    public ToDoController(ToDoService service) {
        super(ToDoController.class);
        this.service = service;
    }

    @PostMapping("/hugetask/{id}/todo")
    private ResponseEntity<SimplifiedDto> createToDo(@RequestBody SimplifiedDto toDo, @PathVariable Long id) {
        logger.info(this.getClass().toString()+":createToDo:"+getTime());
        SimplifiedDto savedProject = service.dispatchToDo(toDo, id);

        return ResponseEntity.ok(savedProject);
    }

    @PutMapping("/todo")
    private ResponseEntity<SimplifiedDto> updateToDo(@RequestBody SimplifiedDto toDo) {
        logger.info(this.getClass().toString()+":updateToDo:"+getTime());
        SimplifiedDto savedProject = service.updateToDo(toDo);

        return ResponseEntity.ok(savedProject);
    }

    @DeleteMapping("/todo/{id}")
    private ResponseEntity<Boolean> deleteToDo(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":removeToDo:"+getTime());

        return service.deleteToDo(id)? ResponseEntity.ok(true): ResponseEntity.badRequest().build();
    }

    @GetMapping("/hugetask/{id}/todo")
    private ResponseEntity<List<SimplifiedDto>> getToDoByHugeTask(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getHugeTasksByProjectId:"+getTime());
        List<SimplifiedDto> toDoList = service.findAllToDoByTask(id);

        if(toDoList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(toDoList);
    }

    @GetMapping("/todo/{id}")
    private ResponseEntity<SimplifiedDto> getToDoById(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getToDoById:"+getTime());

        return ResponseEntity.ok(service.getToDoById(id));
    }

}
