package live.rkozik.pm_app.backend.dtos;

import live.rkozik.pm_app.backend.models.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HugeTaskDto {
    private Long id;
    private String description;
    private boolean isDone;
    private List<SimpleUserDto> usersAssigned;
    private List<SmallTaskDto> smallTasks;
}
