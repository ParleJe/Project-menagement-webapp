package live.rkozik.pm_app.backend.dtos;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SmallTaskDto {
    private Long id;
    private String description;
    private boolean isDone;
    private List<SimpleUserDto> usersAssigned;
    private List<ToDoDto> toDos;
}
