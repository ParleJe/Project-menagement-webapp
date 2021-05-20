package live.rkozik.pm_app.backend.dtos;

import lombok.*;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HugeTaskDto extends SimplifiedDto {
    private boolean isDone;
    private List<SimplifiedUserDto> usersAssigned;
    private List<SimplifiedDto> toDos;
    private SimplifiedDto project;
}
