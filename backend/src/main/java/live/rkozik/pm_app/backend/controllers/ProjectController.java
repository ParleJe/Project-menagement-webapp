package live.rkozik.pm_app.backend.controllers;

import live.rkozik.pm_app.backend.dtos.ProjectDto;
import live.rkozik.pm_app.backend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController("/project")
public class ProjectController {

    private final ProjectService service;

    @Autowired
    public ProjectController(ProjectService service) {
        this.service = service;
    }

    @GetMapping(value = "/project/{UserId}", produces = "application/json")
    private ResponseEntity<List<ProjectDto>> findAllByUserId(@PathVariable Long UserId) {
        List<ProjectDto> projectList = service.findAllProjectsByUserId(UserId);

        if(projectList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(projectList);
    }
}
