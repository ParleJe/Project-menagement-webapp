package live.rkozik.pm_app.backend.controllers;

import live.rkozik.pm_app.backend.dtos.HugeTaskDto;
import live.rkozik.pm_app.backend.dtos.ProjectDto;
import live.rkozik.pm_app.backend.dtos.UserGetDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @GetMapping("/users/{id}")
    private ResponseEntity<UserGetDto> getUserById(@PathVariable Long id) {
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{id}")
    private ResponseEntity<UserGetDto> updateUser(@PathVariable Long id) {
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/users/")
    private ResponseEntity<UserGetDto> createUser() {
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/users/{id}")
    private ResponseEntity<Boolean> deleteUser(@PathVariable Long id) {
        return ResponseEntity.notFound().build();
    }
}
