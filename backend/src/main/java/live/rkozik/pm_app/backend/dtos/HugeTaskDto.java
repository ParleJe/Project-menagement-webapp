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
public class HugeTaskDto {
    private Long id;
    private String name;
    private String description;
    private boolean isDone;
    private List<SimplifiedUserDto> usersAssigned;
    private List<SimplifiedDto> toDos;
}
