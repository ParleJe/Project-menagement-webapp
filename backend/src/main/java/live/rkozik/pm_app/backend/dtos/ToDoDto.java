package live.rkozik.pm_app.backend.dtos;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ToDoDto extends SimplifiedDto {
    private boolean isDone;
}
