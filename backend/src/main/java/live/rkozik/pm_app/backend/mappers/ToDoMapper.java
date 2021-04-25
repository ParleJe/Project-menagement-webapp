package live.rkozik.pm_app.backend.mappers;

import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import live.rkozik.pm_app.backend.dtos.ToDoDto;
import live.rkozik.pm_app.backend.models.ToDo;
import org.mapstruct.Mapper;
import org.mapstruct.Mappings;

@Mapper(
        componentModel = "spring",
        uses = {HugeTaskMapper.class, UserMapper.class, ProjectMapper.class}
)
public interface ToDoMapper {

    ToDoDto ToDoToToDoDto(ToDo source);
    ToDo ToDoDtoToToDo(ToDoDto source);

    SimplifiedDto ToDoToSimplifiedDto(ToDo source);
}
