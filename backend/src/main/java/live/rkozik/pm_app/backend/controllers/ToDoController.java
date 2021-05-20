package live.rkozik.pm_app.backend.controllers;

import live.rkozik.pm_app.backend.dtos.ToDoDto;
import live.rkozik.pm_app.backend.repositories.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ToDoController {

    @PutMapping("/todo/{id}")
    private ResponseEntity<ToDoDto> updateToDo(@PathVariable Long id) {
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/todo/{id}")
    private ResponseEntity<Boolean> deleteToDo(@PathVariable Long id) {
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/hugetask/{id}/todo")
    private ResponseEntity<List<ToDoDto>> getToDoByHugeTask(@PathVariable Long id) {
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/todo/{id}")
    private ResponseEntity<ToDoDto> getToDoById(@PathVariable Long id) {
        return ResponseEntity.notFound().build();
    }

}
