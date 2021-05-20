package live.rkozik.pm_app.backend.controllers;

import live.rkozik.pm_app.backend.dtos.HugeTaskDto;
import live.rkozik.pm_app.backend.services.HugeTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TasksController extends AbstractController {

    private final HugeTaskService service;

    @Autowired
    public TasksController(HugeTaskService service) {
        super(TasksController.class);

        this.service = service;
    }

    //TODO
    @GetMapping("/user/{id}/hugetask")
    private ResponseEntity< List<HugeTaskDto> > getHugeTasksByUserId(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getHugeTasksByUserId:"+getTime());
        List<HugeTaskDto> projectList = service.getTasksByIdUser(id);

        if(projectList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(projectList);
    }

    //TODO
    @GetMapping("/project/{id}/hugetask")
    private ResponseEntity< List<HugeTaskDto> > getHugeTasksByProjectId(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getHugeTasksByProjectId:"+getTime());
        List<HugeTaskDto> projectList = service.getTasksByIdProject(id);

        if(projectList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(projectList);
    }

    //TODO
    @GetMapping("/hugetask/{id}")
    private ResponseEntity<HugeTaskDto> getHugeTaskById(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getHugeTaskById:"+getTime());

        return ResponseEntity.ok(service.getTaskById(id));
    }

    //TODO
    @PostMapping("/project/{id}/hugetask")
    private ResponseEntity<HugeTaskDto> createHugeTask(@PathVariable Long id, @RequestBody HugeTaskDto task) {
        logger.info(this.getClass().toString()+":createProject:"+getTime());
        HugeTaskDto savedProject = service.dispatchTask(task, id);

        return ResponseEntity.ok(savedProject);
    }

    //TODO
    @PutMapping("/hugetask")
    private ResponseEntity<HugeTaskDto> updateHugeTask(@RequestBody HugeTaskDto task) {
        logger.info(this.getClass().toString()+":createProject:"+getTime());
        HugeTaskDto savedProject = service.updateTask(task);

        return ResponseEntity.ok(savedProject);
    }

    //TODO
    @DeleteMapping("/hugetask")
    private ResponseEntity<Boolean> removeHugeTask(@RequestBody HugeTaskDto task) {
        logger.info(this.getClass().toString()+":removeProject:"+getTime());

        return service.deleteTask(task)? ResponseEntity.ok(true): ResponseEntity.badRequest().build();
    }
}
