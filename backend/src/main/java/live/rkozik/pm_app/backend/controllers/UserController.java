package live.rkozik.pm_app.backend.controllers;

import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import live.rkozik.pm_app.backend.dtos.SimplifiedUserDto;
import live.rkozik.pm_app.backend.dtos.UserGetDto;
import live.rkozik.pm_app.backend.dtos.UserPostDto;
import live.rkozik.pm_app.backend.services.SecurityService;
import live.rkozik.pm_app.backend.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class UserController extends AbstractController {

    private final UserService service;
    private final SecurityService securityService;

    public UserController(UserService userService, SecurityService securityService) {
        super(UserController.class);
        this.service = userService;
        this.securityService = securityService;
    }

    @GetMapping("/user/{id}")
    private ResponseEntity<SimplifiedUserDto> getUserById(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getUserById:"+getTime());

        return ResponseEntity.ok(service.getUserById(id));
    }

    @GetMapping("/project/{id}/user")
    private ResponseEntity< List<SimplifiedUserDto> > getUsersByProject(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getUsersByProject:"+getTime());
        List<SimplifiedUserDto> userList = service.findAllUsersByProject(id);

        if(userList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(userList);
    }

    @GetMapping("/task/{id}/user")
    private ResponseEntity< List<SimplifiedUserDto> > getUsersByTask(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getHugeTasksByTask:"+getTime());
        List<SimplifiedUserDto> userList = service.findAllUsersByTask(id);

        if(userList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(userList);
    }

    @PutMapping("/project/{id}/user")
    private ResponseEntity<SimplifiedUserDto> setUserToProject(@PathVariable Long id, @RequestBody SimplifiedUserDto user) {
        logger.info(this.getClass().toString()+":setUserToProject:"+getTime());
        SimplifiedUserDto addedUser = service.connectUserToProject(user.getName(), user.getSurname(), id);

        return ResponseEntity.ok(addedUser);
    }
}
