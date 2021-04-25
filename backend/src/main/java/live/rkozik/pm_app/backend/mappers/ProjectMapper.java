package live.rkozik.pm_app.backend.mappers;

import live.rkozik.pm_app.backend.dtos.ProjectDto;
import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import live.rkozik.pm_app.backend.models.Project;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring",
        uses = {HugeTaskMapper.class, ToDoMapper.class, UserMapper.class}
)
public interface ProjectMapper {

    ProjectDto ProjectToProjectDto(Project source);
    Project ProjectDtoToProject(ProjectDto source);

    SimplifiedDto ProjectToSimplifiedDto(Project source);
}
