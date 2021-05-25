package live.rkozik.pm_app.backend.mappers;

import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import live.rkozik.pm_app.backend.models.ToDo;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring",
        uses = {HugeTaskMapper.class, UserMapper.class, ProjectMapper.class}
)
public interface ToDoMapper {

    SimplifiedDto ToDoToSimplifiedDto(ToDo source);
    ToDo ToDoDtoToToDo(SimplifiedDto source);
}
