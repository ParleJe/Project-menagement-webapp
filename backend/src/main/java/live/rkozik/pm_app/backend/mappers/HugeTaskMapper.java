package live.rkozik.pm_app.backend.mappers;

import live.rkozik.pm_app.backend.dtos.HugeTaskDto;
import live.rkozik.pm_app.backend.models.HugeTask;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring",
        uses = {UserMapper.class, ToDoMapper.class, ProjectMapper.class}
)
public interface HugeTaskMapper {

    HugeTaskDto HugeTaskToHugeTaskDto(HugeTask source);
    HugeTask HugeTaskDtoToHugeTask(HugeTaskDto source);

}
