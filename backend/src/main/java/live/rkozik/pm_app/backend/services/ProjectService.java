package live.rkozik.pm_app.backend.services;

import live.rkozik.pm_app.backend.dtos.ProjectDto;
import live.rkozik.pm_app.backend.mappers.ProjectMapper;
import live.rkozik.pm_app.backend.models.Project;
import live.rkozik.pm_app.backend.repositories.ProjectRepository;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectService {

    final private ProjectRepository projectRepository;
    final private ProjectMapper mapper;

    @Autowired
    public ProjectService(ProjectRepository projectRepository, ProjectMapper mapper) {
        this.projectRepository = projectRepository;
        this.mapper = mapper;
    }

    public List<ProjectDto> findAllProjectsByUserId(Long userId) {

        List<Project> projects = projectRepository.findByIdUser(userId);
        return projects.stream()
                .map(mapper::ProjectToProjectDto)
                .collect(Collectors.toList());
    }

}
