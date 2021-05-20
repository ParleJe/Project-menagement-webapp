package live.rkozik.pm_app.backend.mappers;

import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import live.rkozik.pm_app.backend.models.HugeTask;
import live.rkozik.pm_app.backend.models.Project;
import live.rkozik.pm_app.backend.models.ToDo;

public interface SimplifiedDtoMapper {

    SimplifiedDto ProjectToSimplifiedDtp(Project source);
    SimplifiedDto TaskToSimplifiedDtp(HugeTask source);
    SimplifiedDto ToDoToSimplifiedDtp(ToDo source);


}
