package live.rkozik.pm_app.backend.services;


import live.rkozik.pm_app.backend.dtos.HugeTaskDto;
import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import live.rkozik.pm_app.backend.mappers.HugeTaskMapper;
import live.rkozik.pm_app.backend.models.HugeTask;
import live.rkozik.pm_app.backend.models.Project;
import live.rkozik.pm_app.backend.repositories.HugeTaskRepository;
import live.rkozik.pm_app.backend.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HugeTaskService {

    private final HugeTaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    private final HugeTaskMapper taskMapper;

    @Autowired
    public HugeTaskService(HugeTaskRepository taskRepository, ProjectRepository projectRepository, HugeTaskMapper taskMapper) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
        this.taskMapper = taskMapper;
    }

    public List<HugeTaskDto> getTasksByIdUser(Long id) {
        List<HugeTask> projects = taskRepository.findByIdUser(id);
        return projects.stream()
                .map(taskMapper::HugeTaskToHugeTaskDto)
                .collect(Collectors.toList());
    }

    public List<HugeTaskDto> getTasksByIdProject(Long id) {
        List<HugeTask> projects = taskRepository.findByIdProject(id);
        return projects.stream()
                .map(taskMapper::HugeTaskToHugeTaskDto)
                .collect(Collectors.toList());
    }

    public HugeTaskDto getTaskById(Long id) {
        Optional<HugeTask> OptionalProject = taskRepository.findById(id);

        return OptionalProject.map(taskMapper::HugeTaskToHugeTaskDto).orElseThrow(
                () -> new HttpClientErrorException(HttpStatus.NOT_FOUND, "cannot find task")
        );
    }

    public HugeTaskDto dispatchTask(HugeTaskDto task, Long idProject) {
        Optional<Project> precedentProject = projectRepository.findById(idProject);
        Project fetchedProject = precedentProject.orElseThrow(
                () -> new HttpClientErrorException(HttpStatus.NOT_FOUND, "precedent Project is invalid")
        );

        HugeTask taskEntity = taskMapper.HugeTaskDtoToHugeTask(task);
        taskEntity.setProject(fetchedProject);

        return taskMapper.HugeTaskToHugeTaskDto(taskRepository.saveAndFlush(taskEntity));
    }

    public HugeTaskDto updateTask(HugeTaskDto task) {
        if(task.getId() == null || !taskRepository.existsById(task.getId()))
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND,"id doesn't exists");

        HugeTask mappedTask = taskMapper.HugeTaskDtoToHugeTask(task);

        return taskMapper.HugeTaskToHugeTaskDto( taskRepository.saveAndFlush(mappedTask) );
    }

    public boolean deleteTask(SimplifiedDto task) {
        try {
            taskRepository.deleteById(task.getId());
        } catch (IllegalArgumentException exception) {

            throw new HttpClientErrorException(HttpStatus.I_AM_A_TEAPOT, "id cannot be null");
        }

        return true;
    }
}
