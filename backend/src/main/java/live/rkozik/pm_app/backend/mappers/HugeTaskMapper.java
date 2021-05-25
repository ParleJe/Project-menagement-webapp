package live.rkozik.pm_app.backend.mappers;

import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import live.rkozik.pm_app.backend.models.HugeTask;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring",
        uses = {UserMapper.class, ToDoMapper.class, ProjectMapper.class}
)
public interface HugeTaskMapper {


    HugeTask HugeTaskDtoToHugeTask(SimplifiedDto source);
    SimplifiedDto TaskToSimplifiedDto(HugeTask source);


}
