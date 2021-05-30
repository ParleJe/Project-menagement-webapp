package live.rkozik.pm_app.backend.controllers;

import live.rkozik.pm_app.backend.dtos.ProjectDto;
import live.rkozik.pm_app.backend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProjectController extends AbstractController {

    private final ProjectService service;

    @Autowired
    public ProjectController(ProjectService service) {
        super(ProjectController.class);

        this.service = service;
    }

    @GetMapping("/user/{id}/project")
    private ResponseEntity< List<ProjectDto> > getProjectsByUserId(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getProjectsByUserId:"+getTime());
        List<ProjectDto> projectList = service.findAllProjectsByUserId(id);

        if(projectList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(projectList);
    }

    @GetMapping("/project/{id}")
    private ResponseEntity<ProjectDto> getProjectById(@PathVariable Long id) {
        logger.info(this.getClass().toString()+":getProjectById:"+getTime());

        return ResponseEntity.ok(service.getProjectById(id));
    }

    @DeleteMapping("/project")
    private ResponseEntity<Boolean> removeProject(@RequestBody ProjectDto project) {
        logger.info(this.getClass().toString()+":removeProject:"+getTime());

        return service.deleteProject(project)? ResponseEntity.ok(true): ResponseEntity.badRequest().build();
    }

    @PostMapping("/project")
    private ResponseEntity<ProjectDto> createProject(@RequestBody ProjectDto project) {
        logger.info(this.getClass().toString()+":createProject:"+getTime());
        ProjectDto savedProject = service.dispatchProject(project);

        return ResponseEntity.ok(savedProject);
    }

    @PutMapping("/project")
    private ResponseEntity<ProjectDto> updateProject(@RequestBody ProjectDto project) {
        logger.info(this.getClass().toString()+":updateProject:"+getTime());
        ProjectDto savedProject = service.updateProject(project);

        return ResponseEntity.ok(savedProject);
    }
}
